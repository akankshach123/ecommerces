const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
   
   connection.query(`SELECT * FROM main_category `,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},


create:(req,res)=>{
    let{Mainc_id, Main_Name}=req.body;
    
    connection.query (`INSERT INTO  main_category(Mainc_id, Main_Name) VALUES (0,'${Main_Name}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
    
},




}