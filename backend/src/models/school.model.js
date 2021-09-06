const mongoose = require('mongoose')

const SchoolSchema = mongoose.Schema(
  {
    name: String,
    city: String,
    street: String,
    zipcode: Number,
    classroom: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('School', SchoolSchema)
