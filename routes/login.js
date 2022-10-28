var express = require('express');
var router = express.Router();

const authen = require('../models/authenticator');

router.get('/', async function (req, res, next) {
  res.render('login',{ title: 'Login Page'});
});

router.post('/', async function (req, res, next) {
  let session= req.session;
  let [tempo,shop_id,role] = await authen(req.body.username, req.body.password);
  session.user_id = req.body.username;
  session.role= role;
  if (tempo == true && role=='shop') {
    session.shop_id= shop_id;
    // let tempo2 = await shop(req.body.username, req.body.password);
    // let display_table2= await display_table(shop_id);
    // let table = await table_string(shopid);
    // res.render('users', {
    //   title: 'User Page', 
    //   name: req.body.username,
    //   table: display_table2
    // });
    res.redirect('/users');
  }
  else if (tempo == true && role=='director') {
    session.shop_id= 0;
    // let tempo2 = await shop(req.body.username, req.body.password);
    // let tempo3= await product(tempo2.id);
    // let table = await table_string(tempo2.id);
    res.redirect('/director');
    // let select_box_string= await select_box(0);
    // let table_string2= await table_string(0);
    // res.render('admin', {
    //   title: 'Admin Page', 
    //   name: req.body.username,
    //   select_box:select_box_string,
    //   table: table_string2
    // });
  }
  else res.redirect('/');
})
module.exports = router;
