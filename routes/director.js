var express = require('express');
var router = express.Router();
const table_string = require('../models/table_string');
const select_box = require('../models/select_box');
const delete_btn = require('../models/delete');
const insert_btn = require('../models/insert');
const edit_btn = require('../models/edit');
var session;

router.get('/', async function(req, res, next) {
  let session=req.session;
  if (session.user_id && session.role == 'director'){
    let select_box_string= await select_box(0);
    let table_string2= await table_string(0);
    res.render('director', {
      title: 'Director Page', 
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
    res.render('director', {
    title: 'Director Page', 
    name: req.session.user_id,
    select_box:select_box_string,
    table: table_string2
  });
});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.redirect('/');
});

router.post('/delete:id', async function(req, res, next){
  let id = req.params.id;
  delete_btn(id);
  res.redirect('/director');
});
router.post('/insert:id', async function(req, res, next){
  let id = req.body.id;
  insert_btn(id, req.body.name, req.body.price, req.body.quantity, req.body.shop_id);
  res.redirect('/director');
  });
  
  
  router.post('/edit:id', async function(req, res, next){
  let id = req.params.id;
  edit_btn(id, req.body.name, req.body.price, req.body.quantity, req.body.shop_id);
  res.redirect('/director');
  });



module.exports = router;
