import React from 'react'
import { Link } from "react-router-dom"
import './Sign.scss'

function Sign() {
  return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="email" required />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>

  )
}

export default Sign
