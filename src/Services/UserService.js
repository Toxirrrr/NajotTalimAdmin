let api = 'http://localhost:3000/'
async function login(user) {
  let newUser = await fetch(`${api}login`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email: user.username,
      password: user.password,
    }),
  })
  let succes = await newUser.json()
  let token = succes.accessToken
  if (token) {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(succes.user))

    return succes
  }
}

async function addUserTask(id, newTask) {
  let response = fetch(`${api}managers/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({
        tasks: newTask,
      }),
  })
}
export { login, addUserTask }
