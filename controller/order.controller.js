const connection=require('../connection/mysql.connection')
module.exports={
   corder:(req,res)=>{
    let{order_id,customer_id, order_date, status}=req.body;
   connection.query(`INSERT INTO orders(order_id, customer_id, order_date, status) VALUES ('0','${customer_id}','${order_date}','${status}')`,(error,result)=>{
    if(error){
        res.send({error:true,message:error});
    }else{
        res.send({error:false,data:result});
    }
   })

},
getAll:(req,res)=>{
    connection.query(`SELECT * FROM  orders o INNER JOIN customers c ON o.customer_id=c.customer_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }

    })
},

delete:(req,res)=>{
    let id = req.params.id
    connection.query(`DELETE FROM orders WHERE order_id='${id}'`,(error,result)=>{
        if(error){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},
update:(req,res)=>{
    let id=req.params.id
    connection.query(`UPDATE orders SET status='${req.body.status}' Where id=${req.params.id}`,(error,result)=>{
        if(error){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},
search:(req,res)=>{
    let id = req.params.id
        connection.query(`SELECT order_id, customer_id, order_date, status FROM orders where order_id=${id}`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message});
            }else{
                res.send({error:false,data:result});
            }
        })
}
}


