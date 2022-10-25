var express = require('express');
var router = express.Router();
const display_table = require('../models/display_table');
const delete_btn = require('../models/delete');
const insert_btn = require('../models/insert');
const edit_btn = require('../models/edit');
var session;


router.get('/', async function(req, res, next) {
  let session=req.session;
  if (session.user_id){
    let table_string = await display_table(session.shop_id);
    res.render('users', {
      title: 'User Page', 
      name: session.user_id,
      table: table_string
    });
  }
  else {
    res.redirect('/login');
  }
});

router.post('/delete:id', async function(req, res, next){
  let id = req.params.id;
  delete_btn(id);
  res.redirect('/users');
});


router.post('/insert', async function(req, res, next){
let id = req.body.id;
insert_btn(id, req.body.name, req.body.price, req.body.quantity, req.body.shop_id);
res.redirect('/users');
});


router.post('/edit:id', async function(req, res, next){
let id = req.params.id;
edit_btn(id, req.body.name, req.body.price, req.body.quantity, req.body.shop_id);
res.redirect('/users');
});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
