export default window.auth = {
    login:(name1, password1, callback)=>{
        const baseUrl ='http://localhost:3001';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(baseUrl + '/login', {
            method: 'POST',
            headers,
            body : JSON.stringify({
                name: name1,
                password:password1})
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    },
    
    register:(email1, password1, name1,callback) => {
        console.log('Logging in with',email1,password1)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:3001/register", {
            method: 'POST',
            headers,
            body : JSON.stringify({
                name: name1,
                email: email1,
                password:password1})
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    }
}

