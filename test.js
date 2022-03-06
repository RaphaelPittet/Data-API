const axios = require('axios');

const dialogue1 = ["hello", "i want to contact the support", "by email", "thanks"];
const dialogue2 = ["hello", "i want to konw the price of an item", "item name", "the bigger one"];

makePostDialogue(dialogue1, "12345", "54321");
makePostDialogue(dialogue2, "12345", "34567");
//consentsQuestion("34567");

function makePostDialogue( dialog, dialogId, customerId) {

    for(i=0; i<dialog.length; i++){
        let payload = {text: dialog[1], language: "EN"}
    axios.post('http://localhost:3000/data/'+ customerId + '/' + dialogId, payload)
    .then(res => {
        console.log(res.status);
        
    })
    .catch( error => {
        console.log(error);
    });
}
   
}
 /*
async function consentsQuestion (dialogId){

    await axios.post('http://localhost:3000/consents/'+ dialogId)
    .then(res => {
        console.log(res.status);
        
    })
    .catch( error => {
        console.log(error);
    });
}
*/
