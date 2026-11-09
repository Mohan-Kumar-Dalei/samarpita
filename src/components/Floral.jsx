// Gold floral ornaments for the thank-you cards. Each SVG defines its own gradient
// (ids are suffixed so several cards can sit on one page).

export function GoldDefs({ id }) {
  return (
    <defs>
      <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff3c4" />
        <stop offset="0.35" stopColor="#f7c408" />
        <stop offset="0.6" stopColor="#b8860b" />
        <stop offset="0.85" stopColor="#f9dc6e" />
        <stop offset="1" stopColor="#a8740a" />
      </linearGradient>
    </defs>
  )
}

function Flower({ cx, cy, r = 9, id }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((k) => (
        <ellipse
          key={k}
          cx={cx}
          cy={cy - r}
          rx={r * 0.48}
          ry={r}
          transform={`rotate(${k * 72} ${cx} ${cy})`}
          fill={`url(#gold-${id})`}
          fillOpacity="0.28"
          stroke={`url(#gold-${id})`}
          strokeWidth="1.1"
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.32} fill={`url(#gold-${id})`} />
    </g>
  )
}

function Leaf({ d, id }) {
  return <path d={d} fill={`url(#gold-${id})`} fillOpacity="0.22" stroke={`url(#gold-${id})`} strokeWidth="1" />
}

// Corner vine with leaves and flowers; mirror it with the `flip` prop for other corners
export function CornerFlourish({ id, className = '', flip = '' }) {
  const t = { tl: '', tr: 'scale(-1 1) translate(-140 0)', bl: 'scale(1 -1) translate(0 -140)', br: 'scale(-1 -1) translate(-140 -140)' }[flip || 'tl']
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      <GoldDefs id={id} />
      <g transform={t} fill="none" strokeLinecap="round">
        <path d="M10 134 C 8 80, 26 34, 70 14 S 122 6, 134 10" stroke={`url(#gold-${id})`} strokeWidth="1.6" />
        <path d="M18 104 C 30 76, 52 60, 84 58" stroke={`url(#gold-${id})`} strokeWidth="1.1" />
        <path d="M44 22 C 54 36, 56 48, 50 62" stroke={`url(#gold-${id})`} strokeWidth="1.1" />
        <path d="M84 58 c 8 -2 14 2 14 8 c -6 4 -12 2 -14 -8 z" stroke={`url(#gold-${id})`} strokeWidth="1" />
        <Leaf id={id} d="M58 30 c 8 -12 22 -14 28 -10 c -6 10 -18 14 -28 10 z" />
        <Leaf id={id} d="M26 64 c -2 -14 6 -26 14 -28 c 2 12 -4 22 -14 28 z" />
        <Leaf id={id} d="M100 12 c 6 -8 16 -8 20 -4 c -6 6 -14 8 -20 4 z" />
        <Leaf id={id} d="M12 108 c -6 -8 -6 -18 -2 -22 c 6 6 8 14 2 22 z" />
        <Leaf id={id} d="M60 70 c 4 -10 14 -14 20 -12 c -4 8 -12 12 -20 12 z" />
        <Flower id={id} cx={28} cy={28} r={11} />
        <Flower id={id} cx={68} cy={50} r={6} />
        <Flower id={id} cx={16} cy={84} r={5} />
        <circle cx="120" cy="22" r="2" fill={`url(#gold-${id})`} />
        <circle cx="40" cy="96" r="2" fill={`url(#gold-${id})`} />
        <circle cx="92" cy="40" r="1.6" fill={`url(#gold-${id})`} />
      </g>
    </svg>
  )
}

// Odisha lotus, used as the crest of the card
export function Lotus({ id, className = '' }) {
  const petal = (rot, len = 34, w = 11) => (
    <path
      key={rot}
      d={`M60 62 C ${60 - w} ${62 - len * 0.55}, ${60 - w * 0.4} ${62 - len}, 60 ${62 - len - 4} C ${60 + w * 0.4} ${62 - len}, ${60 + w} ${62 - len * 0.55}, 60 62 Z`}
      transform={`rotate(${rot} 60 62)`}
      fill={`url(#gold-${id})`}
      fillOpacity="0.25"
      stroke={`url(#gold-${id})`}
      strokeWidth="1.2"
    />
  )
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <GoldDefs id={id} />
      {[-70, 70].map((r) => petal(r, 26, 9))}
      {[-45, 45].map((r) => petal(r, 32, 10))}
      {[-20, 20].map((r) => petal(r, 38, 11))}
      {petal(0, 44, 12)}
      <path d="M22 66 C 40 74, 80 74, 98 66" fill="none" stroke={`url(#gold-${id})`} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M36 74 C 50 78, 70 78, 84 74" fill="none" stroke={`url(#gold-${id})`} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

// Thin divider with a diamond in the middle
export function GoldDivider({ id, className = '' }) {
  return (
    <svg viewBox="0 0 200 12" className={className} aria-hidden="true">
      <GoldDefs id={id} />
      <path d="M4 6 H86 M114 6 H196" stroke={`url(#gold-${id})`} strokeWidth="1" />
      <path d="M100 1 L105 6 L100 11 L95 6 Z" fill={`url(#gold-${id})`} />
      <circle cx="90" cy="6" r="1.4" fill={`url(#gold-${id})`} />
      <circle cx="110" cy="6" r="1.4" fill={`url(#gold-${id})`} />
    </svg>
  )
}
