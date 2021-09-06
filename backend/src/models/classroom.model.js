const mongoose = require('mongoose')

module.exports = mongoose.model(
  'Classroom',
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    buliding: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Building',
    },
  }),
  'classrooms'
)
