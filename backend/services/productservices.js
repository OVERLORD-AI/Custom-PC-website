const {  ObjectId } = require('mongodb');

const product = require('../models/productmodule')
const user = require('../models/usermodel')
class pservice{
  async addproductservices(data){
   console.log("inservicess",data);
   
   const product1 = new product(data) 

   const product2 =  await product1.save();

   console.log(product2);
   


    return product2




  }
  async deleteproductservices(id){
   let xyz = await product.deleteOne({_id:new ObjectId(id)})
   console.log(xyz)
   return xyz;
  }

  async getallproductservices(){
    // to find product
    //schema.find()
    let getproduct= await product.find({})
    console.log(getproduct.length,getproduct)
     return getproduct
  }
  async updateproductservice(id,body){
         
     let res= await   product.updateOne({_id:new ObjectId(id)},body)   //(database key:value ,updated body )
     console.log(res);
     return res;
  }

  async addproductuserservices(userid,productArr){
    let id= String(userid)
    let res = await user.updateone(
      {
       _id:new ObjectId(id),

      },
      {
        $addToSet:{products:productArr}
      }

    )
    console.log("jkhjkhjkhkjhkjhjk",res)    //
  }
    
  }



const pser = new pservice();

module.exports=pser;