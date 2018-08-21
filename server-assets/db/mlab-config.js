let mongoose = require('mongoose')
const connectionString = 'mongodb://studentOne:student1@ds014388.mlab.com:14388/gregslistlist'

let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
    console.log('Connected to Database')
})