export default window.auth = {
    updateSchedule:(day1, start1, stop1, action1, callback)=>{
        const baseUrl ='https://mr-meetings-back.herokuapp.com/';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(baseUrl + '/updateSchedule', {
            method: 'POST',
            headers,
            body : JSON.stringify({
                day: day1,
                start: start1,
                end: stop1,
                action: action1,
                id: localStorage.getItem('id')
            })
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    },

    getEvents:(callback)=>{
        const baseUrl ='https://mr-meetings-back.herokuapp.com/';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(baseUrl + '/findSchedule', {
            method: 'POST',
            headers,
            body : JSON.stringify({
                id: localStorage.getItem('id')
            })
        }).then((response) => {
            var data = response.json().then((data) => {
                // console.log(data)
            callback(data)
            })
        })
    },
    
    

}


