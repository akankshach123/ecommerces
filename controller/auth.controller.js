
 //const connection=require('../connection/mysql.connection');
// const bcrypt = require('bcrypt');
// const jwt=require('jsonwebtoken');
// module.exports = {
//     loginUser:(req,res)=>{
//         let {username,password}=req.body;
//         connection.query(`select * from customers where email= '${username}'`,async(err,result)=>{
//             if(err) {
//                 res.send({error:true,message:err.message});
//             } else {
//                 console.log(result);
//                 let isSame=await bcrypt.compare(password,result[0]. password);
//                 if(isSame) {
//                 let token=jwt.sign({id:result[0].id,Name:result[0].Name},'secretKey',{algorithm:'HS256',expiresIn:'4h'})
//                     res.send({error:false,message:"Loged in",token:token});
//                 }else{
//                     res.send({error:true,message:"Login failed "});
//                 }
//             }
//         })
//     }
// }

const connection=require('../connection/mysql.connection');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
module.exports = {
    loginUser:(req,res)=>{
        let {username,password}=req.body;
        connection.query(`select * from customers where email='${username}'`,async(err,result)=>{
            if(err) {
                res.send({error:true,message:err.message});
            } else {
                console.log(result);
                let isSame=await bcrypt.compare(password,result[0].password);
                if(isSame) {
                let token=jwt.sign({id:result[0].id,Name:result[0].Name},'secretKey',{algorithm:'HS256',expiresIn:'1h'})
                    res.send({error:false,message:"Loged in ",token:token});
                }else{
                    res.send({error:true,message:"Login failed "});
                }
            }
        })
    }
}




