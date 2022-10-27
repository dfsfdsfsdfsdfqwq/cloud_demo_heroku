var pg_conn = require("./pg_config")
async function select_box(id) {

    const acc_query =
    {
        text: 'SELECT * FROM shops',
    }
    query_data = await pg_conn.query(acc_query);

    var str = ``
    str += `
    <form action="/director/selectshop${id}" method="post">
    <label for="shop">Choose a shop:</label>
    <select name="shop_name" id="shopabc">`
    str+=`<option value=0 >All Shop</option>`
    for(var i=0;i<query_data.rows.length;i++)
    {
            if (id==query_data.rows[i].shop_id )
            str+=`<option value=${query_data.rows[i].shop_id} selected>${query_data.rows[i].name}</option>`
            else
            str+=`<option value=${query_data.rows[i].shop_id}>${query_data.rows[i].name}</option>`

    }
    str+=`</select>
    <input type="submit" value="Submit">
    </form>`
    return str;
}
module.exports = select_box;
