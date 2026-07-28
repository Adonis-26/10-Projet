import React from 'react'
import './Features.scss'


function Features({icon, alt, title, text}) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img
            src={icon}
            alt={alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{title}</h3>
          <p>{text}</p>
        </div>
    </section>
  )
}

export default Features