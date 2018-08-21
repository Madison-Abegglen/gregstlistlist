let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    //put your form for car inside here
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    imgUrl: { type: String, required: true }
})

module.exports = mongoose.model('Car', schema)