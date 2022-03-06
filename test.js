const axios = require('axios');

    let payload = { text: 'John Doe', language: 'EN' };

    axios.post('http://localhost:3000/data/12345/54321', payload)
    .then(res => {
        console.log(res.status);
        
    })
    .catch( error => {
        console.log(error);
    });
