import { site } from '../data/site'

// Form messages are emailed to the team through FormSubmit (https://formsubmit.co).
// The first message triggers a one-time activation email to site.email; confirm it once.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`

export async function sendForm(fields) {
  const body = new FormData()
  Object.entries({ _template: 'table', _captcha: 'false', ...fields }).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') body.append(k, v)
  })
  const res = await fetch(ENDPOINT, { method: 'POST', body, headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}
