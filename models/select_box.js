var pg_conn = require("./pg_config")
async function select_box() {

    const acc_query =
    {
        text: 'SELECT * FROM shops',
    }
    query_data = await pg_conn.query(acc_query);

    var str = ``
    str += `
    <form action="selectshop" method="post">
    <label for="shop">Choose a shop:</label>
    <select name="shop_name" id="shopabc">`
    str+=`<option selected value=0 >All Shop</option>`
    for(var i=0;i<query_data.rows.length;i++)
    {
            str+=`<option value=${query_data.rows[i].shop_id}>${query_data.rows[i].name}</option>`

    }
    str+=`</select>
    <input type="submit" value="Submit">
    </form>`
    return str;
}
module.exports = select_box;
