export default window.groupRegister = {
    registerGroup:(title1, member11, member21,callback) => {
        console.log('Creating group',title1)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:3001/registerGroup", {
            method: 'POST',
            headers,
            body : JSON.stringify({
                title: title1,
                member1: member11,
                member2:member21})
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    }
}

