var pg_conn=require("./pg_config")
async function edit_btn(id,name,price,quantity,shop_id){
    var edit_query = 
        {
            text: `UPDATE products 
            SET name = $2,
                price = $3,
                quantity = $4,
                shop_id = $5
            WHERE id = $1;`,
            values: [id, name, price, quantity, shop_id]
        }; 
    var edit_data = await pg_conn.query(edit_query);
    return edit_data;
}
module.exports = edit_btn;


