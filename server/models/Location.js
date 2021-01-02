const mongoose = require("mongoose");
const geocoder = require("../config/geocoder");


const locationSchema = mongoose.Schema({
    address: {
        type: String,
        required: [true, "Please Add  An Address"]
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
          
        },
        coordinates: {
            type: [Number],
            index:'2dsphere'
        },

        formattedAddress:String
    },
 
})


locationSchema.pre('save',async function(next){
    const loc=await geocoder.geocode(this.address)
    this.location={
        type:'Point',
        coordinates:[loc[0].longitude,loc[0].latitude],
        formattedAddress:loc[0].formattedAddress
    }
    this.address=undefined;
    next();
})


const Location=mongoose.model("Location",locationSchema);


module.exports=Location;