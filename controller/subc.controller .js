const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
   
   connection.query(`SELECT * FROM sub_category INNER JOIN main_category ON sub_category.Mainc_id=main_category.Mainc_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},


create:(req,res)=>{
    let{sub_id, sub_Name}=req.body;
    connection.query (`INSERT INTO  sub_category(sub_id, sub_Name) VALUES (0,'${sub_Name}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
    
},


}