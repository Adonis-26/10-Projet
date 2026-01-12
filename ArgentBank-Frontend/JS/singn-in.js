const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('username').value
  const password = document.getElementById('password').value

  try {
    const response = await fetch(
      'http://localhost:3001/api/v1/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    localStorage.setItem('token', data.body.token)

    window.location.href = 'user.html'
  } catch (error) {
    alert('Erreur de connexion : ' + error.message)
  }
})
