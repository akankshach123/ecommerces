const connection = require('../connection/mysql.connection')
module.exports={
getAll:(req,res)=>{
    connection.query(`SELECT * FROM products p INNER JOIN  category C ON p.cat_id= C.cat_id`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            res.send({error:false,data:result});
        }
    })
},
//Add Images
//SELECT * FROM  order_items i INNER JOIN orders o ON i.order_id=o.order_id INNER JOIN products p ON i.product_id=p.product_id `
//SELECT * FROM products p INNER JOIN sub_category s ON p.sub_id=s.sub_id INNER JOIN category c ON p.category_id=c.category_id`
create:(req,res)=>{
    let{product_id, cat_id, product_name, product_description,Price,colors, product_img, product_details, size,total,information,isActive}=req.body;
    let profileimg=req.files[0].filename;
   
    connection.query(`INSERT INTO products(product_id, cat_id, product_name, product_description, Price ,product_img, colors, product_details,size,total,rating,information,isActive) VALUES (0,'${cat_id}','${product_name}','${product_description}','${Price}','${profileimg}','${colors}','${product_details}','${size}','${total}','${rating}','${information}','${isActive}')`,(error,result)=>{
        if(error){
            res.send({error:true,message:error});
        }else{
            connection.query(`INSERT INTO colors(colors_id, color_name, img_url, product_id) VALUES (0,'${colors}','${profileimg}',${result.insertId})`,(error,result1)=>{
                req.files.map((img)=>{
                connection.query(`INSERT INTO colorimg(c_id, Name, img_url, colors_id) VALUES (0,'${colors}','${img.filename}',${result1.insertId})`);
                });
            });
            req.files.map((img)=>{
                connection.query(`INSERT INTO images(image_id, image_url, product_id)VALUES (0,'${img.filename}',${result.insertId})`
                    
                )

            })
            
            res.send({error:false,data:result});
        }
    })


},




//changes

delete:(req,res)=>{
    let id = req.params.id
    connection.query(`DELETE FROM products WHERE product_id='${id}'`,(error,result)=>{
        if(error){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},
update:(req,res)=>{
    let id=req.params.id
    connection.query(`UPDATE products SET stock_quantity='${req.body.stock_quantity}' Where id=${req.params.id}`,(error,result)=>{
        if(error){
            res.send({error:true ,message:error})
        }else{
            res.send({error:false,data:result})
        }
    })
},
search:(req,res)=>{
    let id = req.params.id
        connection.query(`SELECT product_id, cat_id, product_name, product_description, Price ,product_img, colors, product_details, size,quantity,total,rating,information,isActive FROM products where product_id =${id}`,(error,result)=>{
            if(error){
                res.send({error:true,message:error});
            }else{
                res.send({error:false,data:result});
            }
        })
}

}

