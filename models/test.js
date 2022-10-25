var pg_conn=require("./pg_config")
async function test_query(){
const acc_query=
{
    name: 'fetch-user',
    text:'SELECT * FROM users WHERE name=$1 AND pwd=$2',
    values:["tan","12345"]
}
query_data= await pg_conn.query(acc_query);
console.log(query_data);
return query_data
}
console.log(test_query())