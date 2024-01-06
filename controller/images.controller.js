const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
    let id = req.params.id
   connection.query(`SELECT * FROM images where image_id=${id}`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},

search:(req,res)=>{
    let id = req.params.id
        connection.query(`SELECT FROM image_id, image_url, product_id images where image_id=${id}`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        })
}

}