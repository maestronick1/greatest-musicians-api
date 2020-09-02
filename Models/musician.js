
const mongoose = require('mongoose')


let musicianSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100
    },
    period: {
      type: String,
      required: true
    },
    association: {
      type: String,
      required: true
    },
    instrument: {
    type: String,
    },
    alive: {
      type: Boolean,
      default: true
    },
    popularSong: String,
    bandOrGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BandOrGroup'
    }
})

module.exports = mongoose.model('Musician', musicianSchema)