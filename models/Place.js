import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
    name: {type: String,required: true},
    address: {type: String,required: true},
    photo: {type: String},
    events: [{type: mongoose.Schema.Types.ObjectId,ref: 'Event'}],
    occupancy: {type: Number,required: true}
  },{
    timestamps: true
});

let Place= mongoose.model('place',placeSchema)
export default Place