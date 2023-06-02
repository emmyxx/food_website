const API_URL = 'https://projet-web-back-2wc1.onrender.com';


export async function getAllUsers() {
  const response = await fetch(`${API_URL}/users`);
  return await response.json();
}

export async function getAllMeals() {
  const response = await fetch(`${API_URL}/meals`);
  return await response.json();
}
 
export async function login(email, password) {
  const response = await fetch(`${API_URL}/appUsers/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return await response.json();
}

export async function register(email, password) {
  const response = await fetch(`${API_URL}/appUsers/register`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return await response.json();
}