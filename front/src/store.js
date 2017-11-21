export default window.auth = {
    createEvent:(start, stop, day, callback)=>{
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

}