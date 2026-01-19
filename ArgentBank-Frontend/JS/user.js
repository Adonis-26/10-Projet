const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'sign-in.html'
}

fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
    console.log(token)
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
  .catch((err) => {
    console.error(err)
    localStorage.removeItem('token')
    window.location.href = 'sign-in.html'
  })

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location.href = 'index.html'
})
