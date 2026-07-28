import React from 'react'
import './Hero.scss'


 const titre = [
  {
    id: 1,
    text: 'Promoted Content',
  },
  {
    id: 2,
    text: 'No fees.',
  },
  {
    id: 3,
    text: 'No minimum deposit.',
  },
  {
    id: 4,
    text: 'High interest rates.',
  },
   {
    id: 5,
    text: 'Open a savings account with Argent Bank today!',
  }
 ]
              
function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{titre[0].text}</h2>

        {titre.slice(1, 4).map((item) => (
          <p className="subtitle" key={item.id}>{item.text}</p>
        ))}

        <p className="text">{titre[4].text}</p>
      </section>
    </div>
  )
}

export default Hero