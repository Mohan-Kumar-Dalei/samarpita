import { useState } from 'react'

// Image with a warm gradient fallback, so the layout still looks finished if a photo fails to load
export default function Img({ src, alt = '', className = '', imgClassName = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-saffron-soft via-sand to-moss/40 ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      )}
    </div>
  )
}
