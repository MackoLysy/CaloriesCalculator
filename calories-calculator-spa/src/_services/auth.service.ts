
const uriLink = "http://localhost:8080/auth/login";
function logIn(username: string, password: string) {
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
        })
    };
    fetch(uriLink, requestOption).then(res => res.json())
        .then(json => console.log(json));
}

export const authService = {
    logIn,
}