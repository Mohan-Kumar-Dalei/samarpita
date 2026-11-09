import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toPng } from 'html-to-image'
import {
  Drop,
  Phone,
  WhatsappLogo,
  MagnifyingGlass,
  DownloadSimple,
  Trash,
  Star,
  SignOut,
  GoogleLogo,
  Heart,
  X,
  UsersThree,
  ChatCircleText,
  Info,
  ArrowsClockwise,
  Eye,
  EyeSlash,
} from '@phosphor-icons/react'
import ThankYouCard from '../components/ThankYouCard'
import { LogoMark } from '../components/Logo'
import {
  isLive,
  DEMO_PASSWORD,
  signIn,
  signOut,
  watchAdmin,
  listDonors,
  updateDonor,
  deleteDonor,
  setHero,
  listFeedback,
  updateFeedback,
  deleteFeedback,
} from '../lib/store'

const GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const STATUSES = {
  registered: { label: 'Registered', cls: 'bg-sand text-ink' },
  contacted: { label: 'Contacted', cls: 'bg-royal/15 text-royal dark:text-[#7fb2ff]' },
  donated: { label: 'Donated', cls: 'bg-brand-soft text-brand' },
  inactive: { label: 'Inactive', cls: 'bg-blood/10 text-blood' },
}
const fmt = (iso) => (iso ? new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Not given')
const telLink = (p) => `tel:${String(p).replace(/[^\d+]/g, '')}`
const waLink = (p, text) => {
  let n = String(p).replace(/\D/g, '')
  if (n.length === 10) n = '91' + n
  return `https://wa.me/${n}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

function Login({ onDone }) {
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const submit = async (e) => {
    e?.preventDefault()
    setBusy(true)
    setErr('')
    try {
      onDone(await signIn(pw))
    } catch (x) {
      setErr(x.message || 'Could not sign in.')
    } finally {
      setBusy(false)
    }
  }
  return (
    <section className="container-x grid min-h-[80vh] place-items-center pb-24 pt-36">
      <form onSubmit={submit} className="w-full max-w-md rounded-[2rem] border border-line bg-linen p-8 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-10">
        <LogoMark className="mx-auto h-20 w-20" size={192} />
        <h1 className="mt-6 font-display text-5xl">Admin</h1>
        <p className="mt-2 text-muted">Blood donors &amp; feedback</p>
        {isLive ? (
          <button type="submit" disabled={busy} className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink py-4 font-semibold text-cream disabled:opacity-60">
            <GoogleLogo size={20} weight="bold" /> {busy ? 'Signing in…' : 'Sign in with Google'}
          </button>
        ) : (
          <>
            <p className="mt-6 flex items-start gap-2 rounded-2xl bg-gold/15 p-4 text-left text-[13px] leading-relaxed">
              <Info size={18} className="mt-0.5 shrink-0" />
              <span>
                <b>Demo mode.</b> Data is stored only in this browser until Firebase is connected. Demo password: <code className="font-semibold">{DEMO_PASSWORD}</code>
              </span>
            </p>
            <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" className="field mt-4" autoFocus />
            <button type="submit" disabled={busy} className="mt-4 w-full rounded-full bg-ink py-4 font-semibold text-cream disabled:opacity-60">
              {busy ? 'Checking…' : 'Sign in'}
            </button>
          </>
        )}
        {err && <p className="mt-4 text-[14px] text-blood">{err}</p>}
      </form>
    </section>
  )
}

function CardModal({ donor, onClose }) {
  const ref = useRef(null)
  const [busy, setBusy] = useState(false)
  const download = async () => {
    setBusy(true)
    try {
      const url = await toPng(ref.current, { pixelRatio: 2, cacheBust: true })
      const a = document.createElement('a')
      a.href = url
      a.download = `samarpita-thank-you-${donor.name.replace(/\s+/g, '-').toLowerCase()}.png`
      a.click()
    } finally {
      setBusy(false)
    }
  }
  const msg = `Dear ${donor.name}, thank you for donating ${donor.group} blood and giving the gift of life. With gratitude, Samarpita Social Foundation Trust`
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-night/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      data-lenis-prevent
    >
      <motion.div
        initial={{ y: 40, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[520px]"
      >
        <button onClick={onClose} aria-label="Close" className="absolute -right-2 -top-12 grid h-10 w-10 place-items-center rounded-full bg-cream text-ink">
          <X weight="bold" />
        </button>
        <ThankYouCard ref={ref} name={donor.name} group={donor.group} district={donor.district} donatedAt={donor.donatedAt || new Date().toISOString()} />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button onClick={download} disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-night disabled:opacity-60">
            <DownloadSimple weight="bold" /> {busy ? 'Preparing…' : 'Download card'}
          </button>
          <a href={waLink(donor.phone, msg)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 font-semibold text-night">
            <WhatsappLogo weight="bold" /> Send thanks on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Donors() {
  const [rows, setRows] = useState(null)
  const [q, setQ] = useState('')
  const [group, setGroup] = useState('')
  const [district, setDistrict] = useState('')
  const [status, setStatus] = useState('')
  const [card, setCard] = useState(null)

  const load = () => listDonors().then(setRows).catch(() => setRows([]))
  useEffect(() => {
    load()
  }, [])

  const districts = useMemo(() => [...new Set((rows || []).map((r) => r.district).filter(Boolean))].sort(), [rows])
  const filtered = useMemo(
    () =>
      (rows || []).filter(
        (r) =>
          (!group || r.group === group) &&
          (!district || r.district === district) &&
          (!status || r.status === status) &&
          (!q || `${r.name} ${r.phone} ${r.area}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [rows, q, group, district, status],
  )

  const patch = async (r, p) => {
    setRows((rs) => rs.map((x) => (x.id === r.id ? { ...x, ...p } : x)))
    await updateDonor(r.id, p)
  }
  const changeStatus = async (r, s) => {
    const p = { status: s, ...(s === 'donated' && !r.donatedAt ? { donatedAt: new Date().toISOString() } : {}) }
    await patch(r, p)
    const next = { ...r, ...p }
    await setHero(next, s === 'donated' && next.showOnWall)
    if (s === 'donated') setCard(next)
  }
  const toggleWall = async (r) => {
    const show = !r.showOnWall
    await patch(r, { showOnWall: show })
    if (r.status === 'donated') await setHero({ ...r, showOnWall: show }, show)
  }
  const remove = async (r) => {
    if (!confirm(`Delete ${r.name}? This cannot be undone.`)) return
    setRows((rs) => rs.filter((x) => x.id !== r.id))
    await deleteDonor(r.id)
  }
  const exportCsv = () => {
    const cols = ['name', 'group', 'phone', 'email', 'gender', 'age', 'weight', 'district', 'area', 'lastDonation', 'availability', 'status', 'donatedAt', 'createdAt']
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`
    const csv = [cols.join(','), ...filtered.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    a.download = `samarpita-donors-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  const counts = useMemo(() => Object.fromEntries(GROUPS.map((g) => [g, (rows || []).filter((r) => r.group === g).length])), [rows])

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ['Total donors', rows?.length ?? '…'],
          ['Donated', rows?.filter((r) => r.status === 'donated').length ?? '…'],
          ['Contacted', rows?.filter((r) => r.status === 'contacted').length ?? '…'],
          ['New', rows?.filter((r) => r.status === 'registered').length ?? '…'],
        ].map(([l, v]) => (
          <div key={l} className="rounded-2xl border border-line bg-linen p-5">
            <p className="font-display text-5xl leading-none">{v}</p>
            <p className="mt-2 text-[13px] text-muted">{l}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => setGroup('')} className={`rounded-full border px-4 py-2 text-[14px] font-semibold ${!group ? 'border-ink bg-ink text-cream' : 'border-line'}`}>
          All groups
        </button>
        {GROUPS.map((g) => (
          <button
            key={g}
            onClick={() => setGroup(group === g ? '' : g)}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-[14px] font-semibold ${group === g ? 'border-blood bg-blood text-white' : 'border-line'}`}
          >
            <Drop weight="fill" className={group === g ? 'text-white' : 'text-blood'} /> {g}
            <span className="opacity-60">{counts[g]}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto_auto]">
        <label className="relative">
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, phone or area" className="field pl-11" />
        </label>
        <select value={district} onChange={(e) => setDistrict(e.target.value)} className="field">
          <option value="">All districts</option>
          {districts.map((d) => <option key={d}>{d}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="field">
          <option value="">Any status</option>
          {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
        <button onClick={load} className="field flex items-center justify-center gap-2 font-semibold" aria-label="Refresh"><ArrowsClockwise /> </button>
        <button onClick={exportCsv} className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-[14px] font-semibold text-cream">
          <DownloadSimple weight="bold" /> CSV
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {rows === null && <p className="text-muted">Loading…</p>}
        {rows && filtered.length === 0 && <p className="rounded-2xl border border-dashed border-line p-10 text-center text-muted">No donors match these filters.</p>}
        {filtered.map((r) => (
          <motion.div layout key={r.id} className="grid gap-4 rounded-2xl border border-line bg-linen p-4 sm:p-5 lg:grid-cols-[auto_1.4fr_1fr_auto] lg:items-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#ff6b6e,#b3141a)] font-display text-2xl text-white">{r.group}</span>
            <div className="min-w-0">
              <p className="truncate font-display text-2xl">{r.name}</p>
              <p className="text-[13px] text-muted">
                {[r.gender, r.age && `${r.age} yrs`, r.weight && `${r.weight} kg`].filter(Boolean).join(' · ')}
              </p>
              <p className="text-[13px] text-muted">{[r.area, r.district].filter(Boolean).join(', ')}</p>
            </div>
            <div className="text-[13px] leading-relaxed text-muted">
              <p><b className="text-ink">Last donation:</b> {r.lastDonation || 'Not given'}</p>
              <p><b className="text-ink">Call:</b> {r.availability || 'Not given'}</p>
              <p><b className="text-ink">Registered:</b> {fmt(r.createdAt)}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              <select
                value={r.status || 'registered'}
                onChange={(e) => changeStatus(r, e.target.value)}
                className={`rounded-full border-0 px-3 py-2 text-[13px] font-semibold outline-none ${STATUSES[r.status || 'registered'].cls}`}
              >
                {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
              <a href={telLink(r.phone)} title={r.phone} className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream"><Phone weight="bold" /></a>
              <a href={waLink(r.phone)} target="_blank" rel="noreferrer" title="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-mint text-night"><WhatsappLogo weight="bold" /></a>
              <button onClick={() => setCard(r)} title="Thank-you card" className="grid h-10 w-10 place-items-center rounded-full bg-gold text-night"><Heart weight="fill" /></button>
              <button onClick={() => toggleWall(r)} title={r.showOnWall ? 'Shown on heroes wall (after donating)' : 'Hidden from heroes wall'} className="grid h-10 w-10 place-items-center rounded-full border border-line">
                {r.showOnWall ? <Eye /> : <EyeSlash className="text-muted" />}
              </button>
              <button onClick={() => remove(r)} title="Delete" className="grid h-10 w-10 place-items-center rounded-full border border-line text-blood"><Trash /></button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>{card && <CardModal donor={card} onClose={() => setCard(null)} />}</AnimatePresence>
    </div>
  )
}

function Feedback() {
  const [rows, setRows] = useState(null)
  useEffect(() => {
    listFeedback().then(setRows).catch(() => setRows([]))
  }, [])
  const toggle = async (f) => {
    setRows((rs) => rs.map((x) => (x.id === f.id ? { ...x, featured: !f.featured } : x)))
    await updateFeedback(f.id, { featured: !f.featured })
  }
  const remove = async (f) => {
    if (!confirm('Delete this feedback?')) return
    setRows((rs) => rs.filter((x) => x.id !== f.id))
    await deleteFeedback(f.id)
  }
  if (rows === null) return <p className="text-muted">Loading…</p>
  if (!rows.length) return <p className="rounded-2xl border border-dashed border-line p-10 text-center text-muted">No feedback yet.</p>
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rows.map((f) => (
        <div key={f.id} className="flex flex-col rounded-2xl border border-line bg-linen p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-0.5 text-gold">
              {[1, 2, 3, 4, 5].map((n) => <Star key={n} weight={n <= f.rating ? 'fill' : 'regular'} />)}
            </div>
            <span className="text-[12px] text-muted">{fmt(f.createdAt)}</span>
          </div>
          <p className="mt-4 flex-1 leading-relaxed">“{f.message}”</p>
          <p className="mt-4 text-[14px]"><b>{f.name}</b>{f.place && <span className="text-muted"> · {f.place}</span>}</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => toggle(f)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold ${f.featured ? 'bg-brand text-cream' : 'border border-line'}`}
            >
              {f.featured ? 'Shown on website' : 'Show on website'}
            </button>
            <button onClick={() => remove(f)} className="grid h-9 w-9 place-items-center rounded-full border border-line text-blood" aria-label="Delete"><Trash /></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Admin() {
  const [admin, setAdmin] = useState(undefined)
  const [tab, setTab] = useState('donors')
  useEffect(() => watchAdmin(setAdmin), [])

  if (admin === undefined) return <section className="min-h-[80vh]" />
  if (!admin) return <Login onDone={setAdmin} />

  return (
    <section className="container-x pb-24 pt-32 sm:pt-36">
      {!isLive && (
        <p className="mb-6 flex items-start gap-2 rounded-2xl bg-gold/15 p-4 text-[14px]">
          <Info size={18} className="mt-0.5 shrink-0" />
          Demo mode: data lives only in this browser. Connect Firebase to collect real registrations from everyone.
        </p>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Samarpita admin</span>
          <h1 className="h-display mt-3 text-[clamp(2.75rem,6vw,4.5rem)]">Dashboard</h1>
        </div>
        <button onClick={() => signOut().then(() => setAdmin(null))} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[14px] font-semibold">
          <SignOut /> Sign out
        </button>
      </div>
      <div className="relative mt-8 inline-grid grid-cols-2 rounded-full bg-sand p-1.5">
        {[
          ['donors', 'Blood donors', UsersThree],
          ['feedback', 'Feedback', ChatCircleText],
        ].map(([k, l, Icon]) => (
          <button key={k} onClick={() => setTab(k)} className="relative z-10 flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold">
            {tab === k && <motion.span layoutId="admintab" className="absolute inset-0 -z-10 rounded-full bg-ink" />}
            <Icon className={tab === k ? 'text-cream' : ''} /> <span className={tab === k ? 'text-cream' : 'text-ink/70'}>{l}</span>
          </button>
        ))}
      </div>
      <div className="mt-8">{tab === 'donors' ? <Donors /> : <Feedback />}</div>
    </section>
  )
}
