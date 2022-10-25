var pg_conn=require("./pg_config")
async function insert_btn(id,name,price,quantity,shop_id){
    var insert_query = 
        {
            text: 'INSERT INTO products (id, name, price, quantity, shop_id)\
                    VALUES ($1, $2, $3, $4, $5);',
            values: [id, name, price, quantity, shop_id]
        }; 
    var insert_data = await pg_conn.query(insert_query);
    return insert_data;
}
module.exports = insert_btn;


