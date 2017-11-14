
function login(email,password,callback){
    console.log('Logging in with',email,password)
    fetch(baseUrl + 'login', {
        method: 'POST',
        body : JSON.stringify({
                email : email,
                password : password
        })
    }).then((response) => {
        var data = response.json().then((data) => {
            if (data.status == 200) {
                console.log( '[Auth] Auth Successful',data)
                localStorage.setItem('user',JSON.stringify(data.payload))
                user = data.payload
            } else {
                console.log('[Auth] Auth failed,error ' + data.status)
            }
        callback(data)
        })
    })
}