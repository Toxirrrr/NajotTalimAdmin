async function login(user) {
    let newUser = await fetch('http://localhost:3000/login', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRveGlycnJyQGdtYWlsLmNvbSIsImlhdCI6MTczNjY3MzU1OSwiZXhwIjoxNzM2Njc3MTU5LCJzdWIiOiIyIn0.TfpK2rpYVSS-Qkn_vyDfRgrB0f6wZkbUyBcREFx23ss',
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
if(token) {
    localStorage.setItem('token',token)
    return true
}



}
export { login }