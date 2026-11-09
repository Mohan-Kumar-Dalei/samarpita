import {
  BookOpenText,
  FirstAidKit,
  GenderFemale,
  HandHeart,
  BowlFood,
  Scales,
  Heart,
  ShieldCheck,
  UsersThree,
  Sparkle,
} from '@phosphor-icons/react'

// Contact details shown across the site
export const site = {
  name: 'Samarpita',
  fullName: 'Samarpita Social Foundation Trust',
  odia: 'ସମର୍ପିତ',
  tagline: 'Seva hi Samarpan',
  email: 'samarpitateam@gmail.com',
  phone: '+91 95834 63595',
  phoneRaw: '+919583463595',
  whatsapp: '+91 95834 63595',
  whatsappLink: 'https://wa.me/919583463595',
  address: 'Odisha, India',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
  socials: {
    facebook: '#',
    instagram: 'https://www.instagram.com/samar.pita2005/',
    youtube: '#',
    x: '#',
    whatsapp: 'https://wa.me/919583463595',
  },
}

// Photos are served from ImageKit, which resizes and compresses them on the fly
const ik = (file, tr = 'w-1600') => `https://ik.imagekit.io/h7wep5nji/samarpita/${file}?tr=${tr},q-80,f-auto`
// Instagram reels shown on the site — add more reel links here
export const reels = [
  'https://www.instagram.com/reel/DfSOLwhRl96/',
  'https://www.instagram.com/reel/Dfe7U8Lo4B-/',
]

export const images = {
  team: ik('team-samarpita-group.jpg', 'w-2000'),
  teamSmall: ik('team-samarpita-group.jpg', 'w-1200'),
  founder: ik('founder.jpg', 'w-900'),
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Blood Donation', to: '/blood-donation' },
  { label: 'Support Us', to: '/support' },
  { label: 'Contact Us', to: '/contact' },
]

export const stats = [
  { value: 5000, suffix: '+', label: 'People helped' },
  { value: 150, suffix: '+', label: 'Active volunteers' },
  { value: 60, suffix: '+', label: 'Villages reached' },
  { value: 8, suffix: '', label: 'Years of seva' },
]

export const services = [
  { icon: BookOpenText, title: 'Education', text: 'Scholarships, study material and free tuition for children who cannot afford school.' },
  { icon: FirstAidKit, title: 'Healthcare', text: 'Health camps, medicine support and help navigating hospitals for treatment.' },
  { icon: GenderFemale, title: 'Women Empowerment', text: 'Skill training, safety support and counselling for women and young girls.' },
  { icon: HandHeart, title: 'Elderly Care', text: 'Companionship, pension guidance and daily-needs support for senior citizens.' },
  { icon: BowlFood, title: 'Food & Relief', text: 'Ration kits, community kitchens and fast response during floods and disasters.' },
  { icon: Scales, title: 'Legal & Social Guidance', text: 'Free guidance on documents, government schemes and legal rights.' },
]

export const steps = [
  { n: '01', title: 'Tell us your problem', text: 'Fill the contact form or call us. Every message reaches our team directly — in confidence.' },
  { n: '02', title: 'We review & reach out', text: 'A coordinator studies your case and contacts you within 24–48 hours.' },
  { n: '03', title: 'We solve it together', text: 'We connect you with volunteers, experts and resources until the problem is solved.' },
]

export const stories = [
  { tag: 'Education', title: 'Rani’s dream of becoming a nurse is back on track', text: 'A scholarship and books helped her finish Class 12 with distinction.' },
  { tag: 'Relief', title: '400 families received ration kits after the cyclone', text: 'Our volunteers reached remote villages within 48 hours.' },
  { tag: 'Elderly Care', title: 'Ramesh ji finally got his pension after 3 years', text: 'We helped him complete paperwork and follow up with the office.' },
]

export const testimonials = [
  { quote: 'When nobody listened to us, Samarpita did. They stood by my family until my son got his treatment.', name: 'Sunita Devi', place: 'Cuttack' },
  { quote: 'I wrote one message on the website. Within a day someone called me and guided me step by step.', name: 'Prakash Nayak', place: 'Puri' },
  { quote: 'They don’t just help — they treat you with dignity. That is what makes them different.', name: 'Anjali Mishra', place: 'Bhubaneswar' },
]

export const values = [
  { icon: Heart, title: 'Compassion', text: 'We listen first, and help with empathy.' },
  { icon: ShieldCheck, title: 'Honesty', text: 'Complete transparency in every rupee and action.' },
  { icon: UsersThree, title: 'Equality', text: 'Help for every person, regardless of background.' },
  { icon: Sparkle, title: 'Dedication', text: 'We stay until the problem is truly solved.' },
]
