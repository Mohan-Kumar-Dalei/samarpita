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

// Change these to the team's real details
export const site = {
  name: 'Samarpita',
  hindi: 'समर्पिता',
  tagline: 'Seva hi Samarpan',
  email: 'contact@samarpita.org',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  helpline: '1800 123 4567',
  address: 'Plot 21, Seva Marg, Bhubaneswar, Odisha 751001',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    x: '#',
    whatsapp: '#',
  },
}

// Placeholder photos — replace with the team's own photos in /public/images
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
export const images = {
  hero: u('photo-1488521787991-ed7bbaae773c'),
  heroSide: u('photo-1469571486292-0ba58a3f068b', 900),
  story: u('photo-1559027615-cd4628902d4a', 1200),
  community: u('photo-1593113598332-cd288d649433', 1200),
  children: u('photo-1497486751825-1233686d5d80', 1200),
  donate: u('photo-1532629345422-7515f3d16bb6', 1200),
  stories: [
    u('photo-1509099836639-18ba1795216d', 900),
    u('photo-1544027993-37dbfe43562a', 900),
    u('photo-1531206715517-5c0ba140b2b8', 900),
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
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

export const team = [
  { name: 'Ananya Sahoo', role: 'Founder', initials: 'AS' },
  { name: 'Rohit Das', role: 'Co-Founder', initials: 'RD' },
  { name: 'Priya Mohanty', role: 'Program Coordinator', initials: 'PM' },
  { name: 'Sanjay Behera', role: 'Field Coordinator', initials: 'SB' },
  { name: 'Kavya Panda', role: 'Women’s Support Lead', initials: 'KP' },
  { name: 'Arjun Rout', role: 'Health Camps Lead', initials: 'AR' },
  { name: 'Meera Jena', role: 'Legal Guidance', initials: 'MJ' },
  { name: 'Vikash Pradhan', role: 'Volunteer Lead', initials: 'VP' },
]

export const journey = [
  { year: '2018', title: 'A small beginning', text: 'Five friends started teaching children under a banyan tree.' },
  { year: '2020', title: 'Pandemic relief', text: 'Delivered 20,000+ meals and medicines during lockdown.' },
  { year: '2022', title: 'Registered as a trust', text: 'Samarpita became an official non-profit organisation.' },
  { year: '2024', title: '60 villages', text: 'Health camps and education centres across 60 villages.' },
  { year: '2026', title: 'Help for everyone', text: 'Launched online help — anyone can now share their problem.' },
]
