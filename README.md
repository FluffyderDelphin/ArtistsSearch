##  How to use 
- copy .env file to the Root Directory
- install depenencies 'npm i'
- run Project localy 'npm run start'
- port 'localhost:8080'
- add the '/artists.search/:artistName/:filename' endpoint to the http request.
- artistName and filename are Parameters for the provided http request that look for artist name in the Database and save it the a csv file with the Provided :filename 
- if the artistname was not found in the Database  a List of Artist Names is returned from a local json file 
