const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
   let id =req.params.id;
   connection.query(` SELECT * FROM colorimg C Inner JOIN colors clr ON C.colors_id=clr.colors_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},

create:(req,res)=>{
    let{ color_name, prod_id}=req.body;
    let profileimg=req.files[0].filename;
    connection.query(`INSERT INTO colors(colors_id, color_name, img_url, product_id) VALUES (0,'${color_name}','${profileimg}','${prod_id}')`,(error,result1)=>
    {
        if(error){
            res.send({error:true,message:error});
        }else{
        req.files.map((img)=>{
        connection.query(`INSERT INTO colorimg(c_id, Name, img_url, colors_id) VALUES (0,'${Name}','${img.filename}',${result1.insertId})`);
        });
        res.send({error:false,data:result1});
    }
    });
    
    
   
},




}











