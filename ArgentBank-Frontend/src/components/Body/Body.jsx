import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import './Body.scss'

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
function Body() {
  return (
    <main>
      <Hero />
      <div className="features"> 
        {features.map((feature) => (
        <Features 
          icon={feature.icon}
          alt={feature.alt} 
          title={feature.title}
          text={feature.text}/>
      ))}
      </div>
         
     
      
    </main>
  )
}

export default Body