 const express = require('express');
const  controllerFile  = require('../controller/usercontrol');
const productctrlFile = require('../controller/productcontrol')

 const route = express.Router();

 route.post('/register',controllerFile.registeruser)  // filename.functionname
 route.post('/login',controllerFile.loginuser)
 route.get('/getallusers',controllerFile.getallusers)
 route.put('/updateuser/:userid',controllerFile.updateuser)
 route.delete('/deleteuser/:userid',controllerFile.deleteuser)
 route.post('/productadd',productctrlFile.addproduct)
 route.delete('/delete/:id',productctrlFile.deleteproduct)
 route.get('/getallproduct',productctrlFile.getallproduct)
 route.patch('/updateproduct/:id',productctrlFile.updateproduct)
 route.post('/addproducttouser/:id',productctrlFile.addproducttouser)
 


 module.exports =route