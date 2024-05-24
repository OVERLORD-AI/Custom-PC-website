const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    producttype:{type:String, required:true},
    productname: { type: String, required: true },
    pprice: { type: String, required: true },
    
});
const product = mongoose.model('product', productSchema);

module.exports=product











