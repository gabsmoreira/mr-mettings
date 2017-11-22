export default window.auth = {
    createEvent:(day1, start1, stop1, callback)=>{
        const baseUrl ='http://localhost:3001';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(baseUrl + '/updateSchedule', {
            method: 'POST',
            headers,
            body : JSON.stringify({
                day: day1,
                start: start1,
                end: stop1,
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
        const baseUrl ='http://localhost:3001';
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
    deleteEvent:(day1, start1, stop1, callback)=>{
        const baseUrl ='http://localhost:3001';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(baseUrl + '/deleteSchedule', {
            method: 'POST',
            headers,
            body : JSON.stringify({
                day: day1,
                start: start1,
                end: stop1,
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


