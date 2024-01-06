const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
   
   connection.query(`SELECT * FROM offers`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},
create:(req,res)=>{
    let{offer_id, offers, product_id}=req.body;

    connection.query (`INSERT INTO category (offer_id, offers, product_id )VALUES (0,'${offers}','${product_id}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
   
},

}