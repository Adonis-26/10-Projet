// 1️⃣ Lire le token stocké au login
const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'login.html'
  return
}

fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Unauthorized')
    }
    return res.json()
  })
  .then(data => {
    const user = data.body

    document.getElementById('welcome-name').textContent =
      `${user.firstName} ${user.lastName}`

    document.getElementById('nav-username').innerHTML =
      `<i class="fa fa-user-circle"></i> ${user.firstName}`
  })
  .catch(err => {
    console.error('PROFILE ERROR:', err)

    if (err.message === 'Unauthorized') {
      localStorage.removeItem('token')
      window.location.href = 'login'
    }
  })

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location.href = 'index.html'
})
