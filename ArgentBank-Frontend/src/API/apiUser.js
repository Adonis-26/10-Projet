const BASE_URL = "http://localhost:3001/api/v1"

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message)
  return data.body.token
}

export const getUserProfile = async (token) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  console.log("Réponse getUserProfile :", data)
  if (!response.ok) throw new Error(data.message)
  return data.body
}

export const updateUserName = async (token, userName) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message)
  return data.body
}