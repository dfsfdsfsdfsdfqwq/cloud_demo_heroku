var pg_conn = require("./pg_config");
async function display_table(shop_id) {
    var table_string=``;

        var product_query = 'SELECT * FROM products ORDER BY id';
        
    
   
    const acc_query =
    {
        text: 'SELECT * FROM shops',
    }
    query_data = await pg_conn.query(acc_query);
    var product= await pg_conn.query('SELECT products.id\
                        FROM products\
                        ORDER by id DESC\
                        LIMIT 1;');
    table_string = `<table border="1">
        <tr>`;
    var data = await pg_conn.query(product_query);
    let num_fields = data.fields.length;
    let num_rows = data.rowCount;
    const list_fields = [];
    // Display table header (list of field names)
    for (let i=0; i<num_fields; i++) 
    {
        let field_name = data.fields[i].name;
        list_fields.push(field_name);
        table_string += `<th>${field_name}</th>`;
    }
    table_string += `<th>Functions</th></tr>`;
    // Display all rows
    for (let i = 0; i <num_rows; i++) {
        table_string += `<tr>
        <form action="/director/edit${data.rows[i].id}" method="post">`;
        // Display every fields
        for (let j =0; j<num_fields; j++) 
        {
            let cell = data.rows[i][list_fields[j]];
            let field_name = data.fields[j].name;
            
            table_string += `
            <td><input name=${field_name} value="${cell} "></td>`;
        }
        table_string += `
                        <td style="display:flex">
                        <button type="submit" value"update">Update</button>
                        </form>
                        <form action="/director/delete${data.rows[i].id}" method="post">
                        <button type="submit" value"delete">Delete</button>
                        </form>
                        </td>
                        </tr>
                        `;
    }

    // Add an empty row and Insert btn
    table_string += `<form action="/director/insert${product.rows[0].id+1}" method="post">
                     <tr>`
    for (let j =0; j<num_fields-1; j++) 
    {
        let field_name = data.fields[j].name;
        if (j==0){
            table_string += `<td><input name=${field_name} id=${field_name} value="${product.rows[0].id+1}" readonly></td>`;
        }
        else 
            table_string += `<td><input name=${field_name} id=${field_name}></td>`;
    }
    
    table_string += `<td>
    <select name="shop_id" id="shopabc">`
    table_string+=`<option value=0 ></option>`
    for(var i=0;i<query_data.rows.length;i++)
    {
            table_string+=`<option value=${query_data.rows[i].shop_id}>${query_data.rows[i].shop_id}</option>`

    }
    table_string+=`</select> </td>`
    table_string += `
                <td>
                <button type="submit" value"insert">Insert</button>
                </td>
                </tr>
                </form>     
                </table>`;
    return table_string;
    
    
    
}
module.exports = display_table;