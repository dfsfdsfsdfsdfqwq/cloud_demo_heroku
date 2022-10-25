var pg_conn = require("./pg_config")
async function table_string(shopid) {
    if (shopid==0) {
        var   acc_query =
        {
            text: 'SELECT * FROM products ORDER BY id',
        }  
    }
    else {var acc_query =
    {
        text: 'SELECT * FROM products WHERE shop_id=$1 ORDER BY id',
        values: [shopid]
    }
    }
    query_data = await pg_conn.query(acc_query);

    var str = ``
    str += `<table border='1' ><tr>`
    for (var i = 0; i < query_data.fields.length; i++) {
        str += `<th>${query_data.fields[i].name}</th>`
    }
    str += `</tr>`
    for (var i = 0; i < query_data.rows.length; i++) {
        str += `<tr>`
        for (const j in query_data.rows[i]) {
            str += `<th>${query_data.rows[i][j]}</th>`
        }
        str += `</tr>`
    }
    return str;
}
module.exports = table_string;
