const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    //lastname: { type: String, required: true },
    email: { type: String, required: true },
    //mobilenum: { type: Number, required: true },
    password: { type: String, required: true },
    products:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'product',  // Reference to the Author model
        
      }]
    
},
{
    timestamps: true

});
const user = mongoose.model('user', userSchema);

module.exports=user