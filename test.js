const axios = require('axios');

const dialogue1 = ["hello", "i want to contact the support", "by email", "thanks"];
const dialogue2 = ["hello", "i want to konw the price of an item", "item name", "the bigger one"];

let dialog2 = makePostDialogue(dialogue2[0], "54321", "34567");
let dialog3 = makePostDialogue(dialogue2[1], "54321", "34567");
let dialog4 = makePostDialogue(dialogue2[2], "54321", "34567");
let dialog5 = makePostDialogue(dialogue2[3], "54321", "34567");
let dialog1 = makePostDialogue(dialogue1[0], "12345", "54321");
let dialog6 = makePostDialogue(dialogue1[1], "12345", "54321");
let dialog7 = makePostDialogue(dialogue1[2], "12345", "54321");
let dialog8 = makePostDialogue(dialogue1[3], "12345", "54321");



Promise.all([dialog1, dialog2,dialog3, dialog4, dialog5,dialog6,dialog7,dialog8]).then((values) =>{
    consentsQuestion("54321", true);
    consentsQuestion("12345", false) 
}) 

async function makePostDialogue( dialog, dialogId, customerId) {

    let payload = {text: dialog, language: "EN"}
    await axios.post('http://localhost:3000/data/'+ customerId + '/' + dialogId, payload)
    .then(res => {
        console.log(res.status);
        
    })
    .catch( error => {
        console.log(error);
    });
}
 
async function consentsQuestion (dialogId, choice){

    await axios.post('http://localhost:3000/consents/'+ dialogId, {consents: choice})
    .then(res => {
        console.log(res.status);
        
    })
    .catch( error => {
        console.log(error);
    });
}
