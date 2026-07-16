import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserProfile } from '../store/userSlice'
import { updateUserName } from '../API/apiUser'
import './Profile.scss'

function Profile() {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const userName = useSelector((state) => state.user.userName)

  const [isEditing, setIsEditing] = useState(false)

  const [newUserName, setNewUserName] = useState(userName || '')

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      const updatedUser = await updateUserName(token, firstName, lastName, newUserName)
      console.log("Utilisateur mis à jour :", updatedUser)
      dispatch(setUserProfile({
        firstName: firstName,
        lastName: lastName,
        userName: updatedUser.userName,
      }))

      setIsEditing(false)
    } catch (error) {
      console.error('Erreur mise à jour :', error.message)
      alert('Erreur : ' + error.message)
    }
  }

  const handleCancel = () => {
    setNewUserName(userName || '')
    setIsEditing(false)
  }

  return (
    <div>
      <main className="mainProfile bg-darkProfile">
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}</h1>

          {isEditing ? (
            <form onSubmit={handleSave}>
              <div>
                <label>UserName {""}</label>
                <input className='input-username'
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <button className="edit-button-modification" type="submit">Save</button>
              <button className="edit-button-modification" type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
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