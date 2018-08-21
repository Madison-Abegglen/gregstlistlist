let express = require('express')
let server = express()
let bodyParser = require('bodyParser')
let port = 3000
let cors = require('cors')

server.use(cors())

//connect to db
require('./server-assets/db/mlab-config')

//register Middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

//routes 
let carRoutes = require('./server-assets/routes/car-routes')

//the data puts all ()route behind /whatever you want it called
server.use('api/cars', carRoutes)

//start server
server.listen(port, () => {
    console.log('Running on port: ', port)
})