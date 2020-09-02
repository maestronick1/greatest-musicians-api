const mongoose = require('mongoose')

const bandOrGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    musicians: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Musician"
    }]
})
module.exports = mongoose.model('BandOrGroup', bandOrGroupSchema)