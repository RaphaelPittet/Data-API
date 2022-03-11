# Data - API

## Data-API Server
I use a local array variable to save data during the chat with the live chat, thanks to this, i minimise the number of interaction between the DB and the DATA-API server.

At the end of the dialog if the user agree to save his data, all data of this user and this dialog will be send to the DB.If not, all data of this dialog will be removed. In this way, we never save any ungit diffagreeded data in our DB. 

So when Data scientist make a GET request the request will go througt the Data-API server to be formated as a BD compabible language, and return all needed Data stored in the DB. In this way, Scientist can only have data with consentement, because all stored data is stored after a consentment confirmation.
 
