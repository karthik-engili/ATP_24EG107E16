1. Generate package.json

2.Create express server

3.Install monf=goose and connect to mongodb  server
     Rest api --- mongodb native driver ->db server    ( very basic server no extra tools)
     rest api --- mongoose ODM tool->db server  (recommended to use )
     ODM - object document mapping (javascript to mongodb document)

4.Build user REST API 
     - CREATE user
     - read all users
     - read a user by id
     - update user by id
     - delete user by id

5. Create a Schema and model of the resource(here user)

6. Create user api and define routes

7. User authentication
     -submit credentials and get token   (like pay money and get ticket and enter into the theatre by using the ticket)
     req -> public routes    (by anyone)
     req -> middleware -> protected routes (authenticated user only) , (middleware performs token verification)

