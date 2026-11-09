import { site } from '../data/site'

// "ସମର୍ପିତ" set in the Damana display font.
// Damana is a legacy font without Unicode shaping, so the reph (ର୍) is its "o" glyph placed after ପ.
// Screen readers get the proper Unicode word through aria-label.
const GLYPHS = 'ସମପoିତ'

export default function OdiaWord({ className = '', repeat = 1 }) {
  return (
    <span role="img" aria-label={site.odia} className={`odia-word ${className}`}>
      <span aria-hidden="true">{Array(repeat).fill(GLYPHS).join(' ')}</span>
    </span>
  )
}
