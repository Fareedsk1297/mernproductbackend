const mongoose= require("mongoose");

// create mongoose.Schema
const userSchema = new mongoose.Schema({
    payto : {
        type:String,
        required:true,
    },
    reason: {
        type:String,
       
    },
    amount : {
        type:Number,
        required:true,
    },

},{timestamps:true});



// create model
const User = mongoose.model('User',userSchema)

module.exports=User;
