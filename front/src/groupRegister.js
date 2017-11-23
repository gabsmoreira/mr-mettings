export default window.groupRegister = {
    registerGroup:(title1, members1, numberMembers1,callback) => {
        console.log('Creating group',title1)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:3001/registerGroup", {
            method: 'POST',
            headers,
            body : JSON.stringify({
                title: title1,
                numberMembers: numberMembers1,
                members: members1})
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    }
}

