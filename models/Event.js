import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    place: {type: mongoose.Schema.Types.ObjectId,ref: 'Place',required: true},
    date: {type: Date,required: true},
    name: {type: String,required: true},
    photo: {type: String},
    description: {type: String,required: true},
    attendees: [{type: mongoose.Schema.Types.ObjectId,ref: 'User'}],
    minimumAge: {type: Number,required: true},
    organizer: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true}
  },{
    timestamps: true
});

let Event= mongoose.model('event',eventSchema)
export default Event
