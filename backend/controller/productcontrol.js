//const pser1=require('../services/productservices')
const pserv1 = require('../services/productservices')
class productctrl{
   async addproduct(req,res){
    let body ={
      producttype:req.body.producttype,
    productname : req.body.name,
    pprice:req.body.price
    }
    console.log(body)
   let add=await pserv1.addproductservices(body) 
   // filename.functionname
   res.send({status:200,'msg':'Add product sucessfully',data:add})
   }
   async deleteproduct(req,res){
     const id = String(req.params.id)
    await  pserv1.deleteproductservices(id)

   }

   async getallproduct(req,res){
     let data1 = await pserv1.getallproductservices()
     res.send({status:200,message:'get product seccessfully',data:data1})
   }

   async updateproduct(req,res){
    let id = req.params.id
    let body ={
      productname :req.body.name
    }
     let data2 =await pserv1.updateproductservice(id,body)
     if(data2['modifiedCount']==1)
      {
        res.send({status:200,message:'updated successfully',data:data2});
      }
      else{
        res.send({status:500,message:' error while updating',data:data2});

      }
      
     
      
   }

   async addproducttouser(req,res){
     let userid= req.params.id
     let productArr = req.body.product
     let data3 =await pserv1.addproductuserservices(userid,productArr)
   }
      







       
   }

const product =new productctrl();
module.exports=product;