async function login(user) {
    let newUser = await fetch('http://localhost:3000/login', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: user.username,
            password: user.password
        }
        )
    })
    let succes = await newUser.json()
    let token = succes.accessToken
    if (token) {
        localStorage.setItem('token', token)
        return succes
    }



}
export { login }