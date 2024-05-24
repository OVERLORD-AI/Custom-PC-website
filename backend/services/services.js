const { json } = require('express');
const  user  = require('../models/usermodel');  // user collection
const bcrypt = require('bcrypt');
const  mongoose  = require('mongoose');
const {  ObjectId } = require('mongodb');

//  const ObjectId = mongoose.Types.ObjectId
 class userservice{
   async adduser(data){
        
        const salt = await bcrypt.genSalt(10);  

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(data['password'], salt);
        data['password']=hashedPassword;
        let userdata=new user(data);  //user is schema
     let saveUser =   await  userdata.save();  // mongodb method save()
     console.log("saveuser",saveUser);
     return saveUser;
    }

    async loginuser(data){
      let userfind  = await user.find({email:data.useremail})
      if(userfind.length>0){
       console.log("userfindddd",userfind);
       let pw=userfind[0]['password']
       console.log("pwwwwwwwww",pw);
       const match = await bcrypt.compare(data.password, pw);
         console.log(match);
         if(match){
            return ({status:0,message:"login successful"})
         }
         else{
            return({status:1,message:"please enter valid password"})
         }
      }
      else{
         return({status:1,message:'please enter valid emailid'});
      }

    }
    async getusers(){
      console.log("kkkkk");
       let getuser=await user.find({});
       console.log("getttuserrr",getuser.length);
       
      
       return({data:getuser})
    }

    async updateuserservices(id,data){
      console.log("=====",data,id);
      let id1 = String(id)
     let fimdUsere = await user.find({_id :  new ObjectId(id1)})
      // let updateuser=await user.updateOne({_id:ObjectId(id)},data)
      console.log("updateUsrrrrrrr",fimdUsere);
     let res=  await user.updateOne({_id :  new ObjectId(id1)} ,data )
     console.log(res)
     return res;
    }

    async deleteuser(id){
      let id2 = String(id)
      console.log("ooooooo",id);
      let result=await user.deleteOne({'firstname':id2});
      console.log("resulttttt",result);
      return result
    }


    
 }
 let obj=new userservice();
 module.exports=obj;