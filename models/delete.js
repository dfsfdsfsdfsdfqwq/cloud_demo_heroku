var pg_conn=require("./pg_config")
async function delete_btn(id){
    var delete_query = 
        {
            text: 'DELETE FROM products WHERE id = $1',
            values: [id]
        }; 
    var delete_data = await pg_conn.query(delete_query);
    return delete_data;
}
module.exports = delete_btn;

