import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginSuccess, setUserProfile } from "../store/userSlice"
import { loginUser, getUserProfile } from "../API/apiUser"
import "./Sign.scss"

function Sign() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errors, setErrors] = useState({ email: "", password: "", general: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    setErrors({ email: "", password: "", general: "" })

    let hasError = false
    const newErrors = { email: "", password: "", general: "" }

    if (!email) {
      newErrors.email = "Email est requis"
      hasError = true
    }

    if (!password) {
      newErrors.password = "Le mot de passe est requis"
      hasError = true
    }else { newErrors.password = "Le mot de passe est incorrect"
      hasError = true }

    if (hasError) {
      setErrors(newErrors)
      return
    }

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
      setErrors({ email: "", password: "", general: "Email ou mot de passe incorrect." })
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="text" name="email" />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" name="password" />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {errors.general && <p className="error-message error-general">{errors.general}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default Sign