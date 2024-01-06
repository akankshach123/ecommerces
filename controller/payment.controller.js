const connection=require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
    connection.query(`SELECT * FROM payment p INNER JOIN orders o ON p.order_id=o.order_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })

},
create:(req,res)=>{
    let{payment_id, order_id, payment_date, total_amount, payment_status}=req.body;
    connection.query(`INSERT INTO payment(payment_id, order_id, payment_date, total_amount, payment_status) VALUES (0,'${order_id}','${payment_date}','${total_amount}','${payment_status}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},

}
