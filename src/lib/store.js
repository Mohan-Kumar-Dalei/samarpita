import { firebaseConfig, ADMIN_EMAILS } from './firebaseConfig'

/*
  Data for blood donors, feedback and the public "heroes" wall.

  Live mode: Firestore + Firebase Auth, used when firebaseConfig is filled in.
  Demo mode: everything is kept in this browser's localStorage so the admin panel
  can be tried before Firebase is set up. Demo data is never shared with anyone.
*/
export const isLive = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)
export const DEMO_PASSWORD = 'samarpita-demo'

// ---------- Firebase (loaded only in live mode) ----------
let fbPromise = null
function fb() {
  if (!fbPromise) {
    fbPromise = Promise.all([import('firebase/app'), import('firebase/firestore'), import('firebase/auth')]).then(
      ([app, fs, auth]) => {
        const a = app.initializeApp(firebaseConfig)
        return { fs, auth, db: fs.getFirestore(a), au: auth.getAuth(a) }
      },
    )
  }
  return fbPromise
}

const toList = (snap) => snap.docs.map((d) => ({ id: d.id, ...d.data() }))
const now = () => new Date().toISOString()

// ---------- Demo storage ----------
const KEY = 'samarpita-demo-db-v1'
function readDemo() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return seedDemo()
}
function writeDemo(db) {
  try {
    localStorage.setItem(KEY, JSON.stringify(db))
  } catch {}
}
function seedDemo() {
  const d = (days) => new Date(Date.now() - days * 86400000).toISOString()
  const db = {
    donors: [
      { id: 'd1', name: 'Sample Donor', group: 'O+', phone: '+91 90000 00001', gender: 'Male', age: '28', weight: '68', district: 'Khordha', area: 'Bhubaneswar', availability: 'Anytime', lastDonation: 'Never donated', showOnWall: true, status: 'donated', donatedAt: d(5), createdAt: d(40) },
      { id: 'd2', name: 'Sample Donor Two', group: 'B+', phone: '+91 90000 00002', gender: 'Female', age: '24', weight: '54', district: 'Cuttack', area: 'Cuttack', availability: 'Weekends', lastDonation: 'Never donated', showOnWall: true, status: 'registered', createdAt: d(12) },
      { id: 'd3', name: 'Sample Donor Three', group: 'A-', phone: '+91 90000 00003', gender: 'Male', age: '35', weight: '74', district: 'Puri', area: 'Puri', availability: 'Only emergencies', lastDonation: d(200).slice(0, 10), showOnWall: false, status: 'contacted', createdAt: d(3) },
    ],
    feedback: [
      { id: 'f1', name: 'Demo Visitor', place: 'Bhubaneswar', rating: 5, message: 'This is a sample feedback message shown in demo mode.', featured: true, createdAt: d(2) },
    ],
    heroes: [{ id: 'd1', name: 'Sample Donor', group: 'O+', district: 'Khordha', donatedAt: d(5) }],
  }
  writeDemo(db)
  return db
}
const demoId = () => Math.random().toString(36).slice(2, 10)

// ---------- Public writes ----------
export async function addDonor(donor) {
  const data = { ...donor, status: 'registered', createdAt: now() }
  if (isLive) {
    const { fs, db } = await fb()
    await fs.addDoc(fs.collection(db, 'donors'), data)
    return
  }
  const db = readDemo()
  db.donors.unshift({ id: demoId(), ...data })
  writeDemo(db)
}

export async function addFeedback({ name, place, rating, message }) {
  const data = { name, place, rating: Number(rating), message, featured: false, createdAt: now() }
  if (isLive) {
    const { fs, db } = await fb()
    await fs.addDoc(fs.collection(db, 'feedback'), data)
    return
  }
  const db = readDemo()
  db.feedback.unshift({ id: demoId(), ...data })
  writeDemo(db)
}

// ---------- Public reads ----------
export async function listHeroes() {
  if (isLive) {
    const { fs, db } = await fb()
    return toList(await fs.getDocs(fs.query(fs.collection(db, 'heroes'), fs.orderBy('donatedAt', 'desc'), fs.limit(24))))
  }
  return readDemo().heroes
}

export async function listFeaturedFeedback() {
  if (isLive) {
    const { fs, db } = await fb()
    return toList(await fs.getDocs(fs.query(fs.collection(db, 'feedback'), fs.where('featured', '==', true), fs.limit(12))))
  }
  // Keep the built-in testimonials until real feedback is featured (skip the demo seed)
  return readDemo().feedback.filter((f) => f.featured && f.id !== 'f1')
}

// ---------- Admin ----------
// Live mode signs in with Google, so the admin email is always verified by Google
export async function signIn(password) {
  if (isLive) {
    const { auth, au } = await fb()
    const cred = await auth.signInWithPopup(au, new auth.GoogleAuthProvider())
    if (!ADMIN_EMAILS.includes(cred.user.email)) {
      await auth.signOut(au)
      throw new Error('This Google account is not an admin.')
    }
    return cred.user.email
  }
  if (password !== DEMO_PASSWORD) throw new Error('Wrong password.')
  sessionStorage.setItem('samarpita-demo-admin', '1')
  return 'demo'
}

export async function signOut() {
  if (isLive) {
    const { auth, au } = await fb()
    return auth.signOut(au)
  }
  sessionStorage.removeItem('samarpita-demo-admin')
}

export function watchAdmin(cb) {
  if (isLive) {
    let unsub = () => {}
    fb().then(({ auth, au }) => {
      unsub = auth.onAuthStateChanged(au, (u) => cb(u && ADMIN_EMAILS.includes(u.email) ? u.email : null))
    })
    return () => unsub()
  }
  cb(sessionStorage.getItem('samarpita-demo-admin') ? 'demo' : null)
  return () => {}
}

export async function listDonors() {
  if (isLive) {
    const { fs, db } = await fb()
    return toList(await fs.getDocs(fs.query(fs.collection(db, 'donors'), fs.orderBy('createdAt', 'desc'))))
  }
  return readDemo().donors
}

export async function updateDonor(id, patch) {
  if (isLive) {
    const { fs, db } = await fb()
    return fs.updateDoc(fs.doc(db, 'donors', id), patch)
  }
  const db = readDemo()
  db.donors = db.donors.map((d) => (d.id === id ? { ...d, ...patch } : d))
  writeDemo(db)
}

export async function deleteDonor(id) {
  if (isLive) {
    const { fs, db } = await fb()
    await fs.deleteDoc(fs.doc(db, 'donors', id))
    return fs.deleteDoc(fs.doc(db, 'heroes', id))
  }
  const db = readDemo()
  db.donors = db.donors.filter((d) => d.id !== id)
  db.heroes = db.heroes.filter((h) => h.id !== id)
  writeDemo(db)
}

// Heroes wall: only name, blood group, district and date — never phone numbers
export async function setHero(donor, show) {
  const hero = { name: donor.name, group: donor.group, district: donor.district, donatedAt: donor.donatedAt || now() }
  if (isLive) {
    const { fs, db } = await fb()
    const ref = fs.doc(db, 'heroes', donor.id)
    return show ? fs.setDoc(ref, hero) : fs.deleteDoc(ref)
  }
  const db = readDemo()
  db.heroes = db.heroes.filter((h) => h.id !== donor.id)
  if (show) db.heroes.unshift({ id: donor.id, ...hero })
  writeDemo(db)
}

export async function listFeedback() {
  if (isLive) {
    const { fs, db } = await fb()
    return toList(await fs.getDocs(fs.query(fs.collection(db, 'feedback'), fs.orderBy('createdAt', 'desc'))))
  }
  return readDemo().feedback
}

export async function updateFeedback(id, patch) {
  if (isLive) {
    const { fs, db } = await fb()
    return fs.updateDoc(fs.doc(db, 'feedback', id), patch)
  }
  const db = readDemo()
  db.feedback = db.feedback.map((f) => (f.id === id ? { ...f, ...patch } : f))
  writeDemo(db)
}

export async function deleteFeedback(id) {
  if (isLive) {
    const { fs, db } = await fb()
    return fs.deleteDoc(fs.doc(db, 'feedback', id))
  }
  const db = readDemo()
  db.feedback = db.feedback.filter((f) => f.id !== id)
  writeDemo(db)
}
