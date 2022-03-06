const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;

// Where we will keep chat history 
let chatHistory = [];


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/data/:customerId/:dialogId', (req, res) => {
    let customerId = req.params.customerId;
    let dialogId = req.params.dialogId;
    let data = req.body;
    let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    let chat = {
        dialogId: dialogId,
        customerId: customerId,
        text: data.text,
        language: data.language,
        timestamp: date
    }

    chatHistory.push(chat)

    res.sendStatus(200)
});

app.post('/consents/:dialogId', (req,res) => {
    let message = "";
    let dialogId = req.params.dialogId;
    // we imagine payload is {consents: true/false}
    let toSave = req.body.consents;
    
    if (toSave){
        // save data to Database
        message = `the chat with dialogId ${dialogId} will be saved in the DB`;
    }else{
        // remove all history of the dialog with dialogId
        message = "history will be remove"
        for (i=0; i<chatHistory.length; i++){
            console.log("saved dialogId: " +chatHistory[i].dialogId);
            console.log("params dialogId: " +dialogId);
            console.log("--------------------------------");


            if(chatHistory[i].dialogId == dialogId){
                console.log(chatHistory[i]);
                chatHistory.splice(i,1);
                i--;
            }
        }
    }
    res.status(200).json({response: message});
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))




