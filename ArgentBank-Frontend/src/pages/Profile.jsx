import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserProfile } from '../store/userSlice'
import { updateUserName } from '../API/apiUser'
import './Profile.scss'

function Profile() {
  const dispatch = useDispatch()

  // Récupère les données du store Redux
  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const userName = useSelector((state) => state.user.userName)

  // Contrôle l'affichage du formulaire
  const [isEditing, setIsEditing] = useState(false)
  // Valeur saisie dans le champ userName
  const [newUserName, setNewUserName] = useState(userName || '')

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      const updatedUser = await updateUserName(token, newUserName)

      dispatch(setUserProfile({
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        userName: updatedUser.userName,
      }))

      setIsEditing(false)
    } catch (error) {
      console.error('Erreur mise à jour :', error.message)
      alert('Erreur : ' + error.message)
    }
  }

  return (
    <div>
      <main className="mainProfile bg-darkProfile">
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}</h1>

          {isEditing ? (
            <form onSubmit={handleSave}>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="New username"
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => {
                setNewUserName(userName || '') // ← remet la valeur d'origine
                setIsEditing(false)
              }}>
                Cancel
              </button>
            </form>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile