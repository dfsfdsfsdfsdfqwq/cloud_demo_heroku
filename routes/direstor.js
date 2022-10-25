var express = require('express');
var router = express.Router();
const table_string = require('../models/table_string');
const select_box = require('../models/select_box');

var session;

router.get('/', async function(req, res, next) {
  let session=req.session;
  if (session.user_id && session.role == 'direstor'){
    let select_box_string= await select_box(0);
    let table_string2= await table_string(0);
    res.render('direstor', {
      title: 'Direstor Page', 
      name: session.user_id,
      select_box:select_box_string,
      table: table_string2
    });
  }
  else if (session.user_id && session.role == 'shop'){
    res.redirect('/users');
  }
  else {
    res.redirect('/login');
  }
});

router.post('/selectshop', async function(req, res, next) {

    let select_box_string= await select_box(req.body.shop_name);
    let table_string2= await table_string(req.body.shop_name);
    res.render('direstor', {
    title: 'Direstor Page', 
    name: req.session.user_id,
    select_box:select_box_string,
    table: table_string2
  });
});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.redirect('/');
});




module.exports = router;
