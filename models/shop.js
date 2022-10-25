var pg_conn=require("./pg_config")
async function shop(user,pass){
    
const acc_query=
{
    text:'SELECT * FROM users WHERE name=$1 AND pwd=$2',
    values:[user,pass]
}
query_data= await pg_conn.query(acc_query);

shopid=query_data.rows[0].shop;
console.log(shopid)
const acc_query2=
{
    text:'SELECT * FROM shops WHERE shop_id=$1',
    values:[shopid]
}
query_data= await pg_conn.query(acc_query2);

return query_data.rows[0];
}

module.exports=shop;