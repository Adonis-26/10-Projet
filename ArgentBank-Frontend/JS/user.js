const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'sign-in.html'
}

fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    if (!data.body) {
      throw new Error('Unauthorized')
    }

    const user = data.body
    document.getElementById('welcome-name').textContent =
      `${user.firstName} ${user.lastName}`

    document.getElementById('nav-username').innerHTML =
      `<i class="fa fa-user-circle"></i> ${user.firstName}`
  })
  .catch(() => {
    localStorage.removeItem('token')
    window.location.href = 'sign-in.html'
  })
  
document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location.href = 'index.html'
})
