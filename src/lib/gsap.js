import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
// Mobile address-bar show/hide resizes the viewport; don't recalculate (and jump) on that
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger }
