import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginSuccess, setUserProfile } from "../store/userSlice"
import { loginUser, getUserProfile } from "../API/apiUser"
import "./Sign.scss"

function Sign() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    try {
    
      const token = await loginUser(email, password)
      console.log("Token reçu :", token)
      dispatch(loginSuccess(token))

      const profile = await getUserProfile(token)

      dispatch(setUserProfile({
        firstName: profile.firstName,
        lastName: profile.lastName,
        userName: profile.userName,
      }))

      navigate("/profile")

    } catch (error) {
      console.error("Erreur login :", error.message)
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