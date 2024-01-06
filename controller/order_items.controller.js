const connection=require('../connection/mysql.connection')
module.exports={
    corder:(req,res)=>{
     let{order_item_id, order_id, product_id, quantity, price_per_item}=req.body;
     
    connection.query(`INSERT INTO  order_items(order_item_id, order_id, product_id, quantity, price_per_item) VALUES ('0','${order_id}','${product_id}','${quantity}','${price_per_item}')`,(error,result)=>{
     if(error){
         res.send({error:true,message:error});
     }else{
         res.send({error:false,data:result});
     }
    })
 
 },
 getAll:(req,res)=>{
    connection.query(`SELECT * FROM  order_items i INNER JOIN orders o ON i.order_id=o.order_id INNER JOIN products p ON i.product_id=p.product_id `,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }

    })
},

}
