var pg_conn=require("./pg_config")
async function authen(user,pass){
    var authenticated = false;
    var role=''
    var shopid;
const acc_query=
{
    name: 'fetch-user',
    text:'SELECT * FROM users WHERE name=$1 AND pwd=$2',
    values:[user,pass]
}
query_data= await pg_conn.query(acc_query);

if(query_data.rowCount==1) 
{
    authenticated = true
    role=query_data.rows[0].role
    shopid=query_data.rows[0].shop_id
    if (role=='direstor') shopid=0;
}
return [authenticated,shopid,role];
}

module.exports=authen;