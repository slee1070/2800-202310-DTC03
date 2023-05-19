
const axios = require('axios');

async function getChatbotResponse(userQuery) {

    let response = await axios.post('http://127.0.0.1:5000/chat', {
        query: userQuery
    }).catch(function(error) {
        console.error('Error:', error);
    });

    console.log('statusCode:', response.status);
    console.log('body:', response.data);
    return response.data;
    
}

module.exports = getChatbotResponse;
