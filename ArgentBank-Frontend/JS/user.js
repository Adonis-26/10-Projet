const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'sign-in.html'
}

fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    if (!data.body) {
      throw new Error('Unauthorized')
    }

    const user = data.body

    document.getElementById('welcome-name').textContent =
      `${user.firstName} ${user.lastName}`

    document.querySelector('.main-nav-item').innerHTML =
      `<i class="fa fa-user-circle"></i> ${user.firstName}`
  })
  .catch(error => {
    console.error('Authentication error:', error)
    localStorage.removeItem('token')
    window.location.href = 'sign-in.html'
  })
