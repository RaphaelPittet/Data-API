# Data-API

Data-API server is used to store data from a live chatbot to a DB (mysql). This server stores on the DB only data with user consents.
To minimise interaction between DB and API server, a local variable stock all dialog before the consents quesiton. According to the answer of the user, the concerned dialog will be remove (never stored in the DB), or will be save to the DB with one query.

V1.0 -> Endpoint works, and temp local storage before saving done.

## DEPLOYMENT

The API server is coded to listen on port 3000.

- To deploy with docker :
    1. $ docker build . -t containername
    2. $ docker run  -p wantedport:3000 -d containername
