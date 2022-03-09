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

    chatHistory.push(chat);
    res.sendStatus(200);
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

            if(chatHistory[i].dialogId == dialogId){
                chatHistory.splice(i,1);
                i--;
            }
        }
    }
    console.log("______________________________________________________--")
    console.log(chatHistory);
    res.status(200).json({response: message});
});


// request for the coding challenge GET /data/(?language=:language|customerId=:customerId)
app.get("/data/language=:language|customerId=:customerId", (req,res) => {
    let language = req.url.slice((req.url.search("=")+1),req.url.search("%"));
    let customerIdParam = req.url.search("customerId=");
    let customerId = req.url.slice((customerIdParam+11), req.url.length);

    
    let message = 'customerid:'+ customerId + "// language:" + language ;
    

    res.status(200).json({response: message});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))




