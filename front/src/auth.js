export default window.auth = {
    login:(email,password,callback)=>{
        const baseUrl ='http://localhost:3001/login';
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
                } else {
                    console.log('[Auth] Auth failed,error ' + data.status)
                }
            callback(data)
            })
        })
    },
    
    register:(email1, password1, name1,callback) => {
        const baseUrl = 'http://localhost:3001';
        console.log('Logging in with',email1,password1)
        var payload = {
                        name: name1,
                        email: email1,
                        password:password1};

var data = new FormData();
data.append( "json", JSON.stringify( payload ) );
        fetch(baseUrl + '/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body : data
        }).then((response) => {
            var data = response.json().then((data) => {
                if (data.status == 200) {
                    console.log( '[Auth] Auth Successful',data)
                } else {
                    console.log('[Auth] Auth failed,error ' + data.status)
                }
            callback(data)
            })
        })
    }
}

