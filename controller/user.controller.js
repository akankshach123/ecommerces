const connection = require('../connection/mysql.connection')
const { validationResult } = require('express-validator');
const Semail=require('../controller/sendm.controller');
const bcrypt=require('bcrypt');
module.exports={
    getAll:(req,res)=>{
        let id = req.params.id
        connection.query(`SELECT * FROM customers where customer_id=${id}`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        })
    },

    //SELECT * FROM images where image_id=${id}`
    createc:(req,res)=>{
        //validation using express-validation
        let{customer_id, first_name, last_name, email, password, address, phone_number, isActive}=req.body;
        let error = validationResult(req);
        if(!error.isEmpty()){
            res.send({error:error.array()});

        }else{
            //haspassword using bcrypt
        let salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(password,salt);
        console.log(hashPassword);
        connection.query(`INSERT INTO customers(customer_id, first_name, last_name, email, password, address, phone_number, isActive) VALUES (0,'${first_name}','${last_name}','${email}','${hashPassword}','${address}','${phone_number}',1)`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        }) 
    }  

},
delete:(req,res)=>{
    let id = req.params.id
    connection.query(`DELETE FROM customers WHERE customer_id='${id}'And isActive=0`,(err,result)=>{
        if(err){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},


search:(req,res)=>{
    let id = req.params.id
        connection.query(`SELECT customer_id, first_name, last_name, email, password, address, phone_number, isActive FROM customers where customer_id=${id}`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        })
},

generateOtp: (req, res) => {     
    const { email } = req.body;
    const otp= Math.floor(100000 + Math.random() * 900000);
     connection.query(`update customers set otp='${otp}' where email='${email}' `,(err,result)=>{
        if(err){
           
            res.send({error:true,message:err});
        }else{
            
            Semail.sendMail(email,otp);
            res.send({error:false,data:result});
        }
    })    
  
  }



}        