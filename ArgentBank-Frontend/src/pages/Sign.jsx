import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginSuccess } from "../store/userSlice"
import "./Sign.scss"

function Sign() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      dispatch(loginSuccess(data.body.token))

      localStorage.setItem("token", data.body.token)

      navigate("/profile")

    } catch (error) {
      console.error(error)
      alert("Erreur de connexion : " + error.message)
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="text" name="email" required />
          </div>

          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default Sign