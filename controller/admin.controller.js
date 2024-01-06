const connection = require('../connection/mysql.connection')
const { validationResult } = require('express-validator');
const bcrypt=require('bcrypt');
module.exports={
    getAll:(req,res)=>{
        connection.query(`SELECT * FROM admin`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        })
    },
    createA:(req,res)=>{
        //validation useing express-validation
        let{Admin_id, first_name, last_name, email, password, address, phone, isActive}=req.body;
        let error = validationResult(req);
        if(!error.isEmpty()){
            res.send({error:error.array()});

        }else{
            //haspassword usseing bcrypt
        let salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(password,salt);
        console.log(hashPassword);
        connection.query(`INSERT INTO admin(Admin_id, first_name, last_name, email, password, address, phone, isActive) VALUES (0,'${first_name}','${last_name}','${email}','${hashPassword}','${address}','${phone}',1)`,(error,result)=>{
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
    connection.query(`DELETE FROM admin WHERE Admin_id='${id}'And isActive=0`,(err,result)=>{
        if(err){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},

}