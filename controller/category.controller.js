const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
   
   connection.query(`SELECT * FROM category C INNER JOIN sub_category S ON C.sub_id=S.sub_id INNER JOIN main_category M ON C.Mainc_id=M.Mainc_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},
//SELECT * FROM  order_items i INNER JOIN orders o ON i.order_id=o.order_id INNER JOIN products p ON i.product_id=p.product_id `
create:(req,res)=>{
    let{cat_id, Name,sub_id}=req.body;

    connection.query (`INSERT INTO category (cat_id, Name,sub_id ,Mainc_id) VALUES (0,'${Name}','${sub_id}','${Mainc_id}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
   
},




}