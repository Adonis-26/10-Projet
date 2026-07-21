import React from 'react'
import './Features.scss'

const features = [
  {
    id: 1,
    icon: '/img/icon-chat.webp',
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    id: 2,
    icon: '/img/icon-money.webp',
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    id: 3,
    icon: '/img/icon-security.webp',
    alt: 'Security Icon',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => (
        <div className="feature-item" key={feature.id}>
          <img
            src={feature.icon}
            alt={feature.alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Features