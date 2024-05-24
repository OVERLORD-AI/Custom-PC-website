const userservice = require('../services/services')
class Ctrl {
  async registeruser(req,res){
    console.log("req.......bodyyyy",req.body);
    let body ={
        firstname:req.body.username,
       // lastname:req.body.last_name,
         email:req.body.email,
        // mobilenum:req.body.phone_number,
         password:req.body.password
    }
    // if(req.body.first_name==null || undefined)
      // {
      //   res.send({status:200,message:'enter valid name'});    // validation
      // }


      
      let data1 =await  userservice.adduser(body)
      res.send({status:200,message:'Register Successfully',data:data1})  //smd 
}
    async loginuser(req,res){

      let body={
        useremail:req.body.email_id,
        password:req.body.password
      }
      let data2 = await userservice.loginuser(body);
      if(data2["status==0"]){
        res.send({status:200,message:data2['message']})
        
      }
      else{
        res.send({status:522,message:data2['message']})
      }
    }

    async getallusers(req,res){
      console.log("iiiiiiiiiiii in vtrllll");
      let data3 = await userservice.getusers()
      res.send({status:200,masage:"get users successfully" ,data:data3});
    }

    async updateuser(req,res){
      let body ={
        firstname:req.body.first_name,
        lastname:req.body.last_name,
         email:req.body.email_id,
         mobilenum:req.body.phone_number,
         password:req.body.password
      }
      console.log("user update",req.params,req.body);
      let data4 = await userservice.updateuserservices(req.params.userid,body)
      if(   data4["modifiedCount"]==1){
        res.send({status:200,masage:" users updated successfully" ,data:data4});
        
      }
      else{
        res.send({status:522,masage:" error while updating user" ,data:data4});

      }

    }
      async deleteuser(req,res){
        console.log("tttttt",req.params);
      let data5  = await  userservice.deleteuser(req.params.userid);
      if(data5['deletedCount'] == 1){
        res.send({status:200,masage:" users deleted successfully" ,data:data5});
      
      }
      else{
        res.send({status:522,masage:" error while deleting user" ,data:data5});

      }
      
      }
}
let ctrlObj =new Ctrl()
module.exports=ctrlObj