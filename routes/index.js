const { name } = require('ejs');
var express = require('express');
const authen = require('../models/authenticator');
const shop = require('../models/shop');
const product = require('../models/product');
const select_box = require('../models/select_box');
const table_string = require('../models/table_string');
const display_table = require('../models/display_table');
const delete_btn = require('../models/delete');
const insert_btn = require('../models/insert');
const edit_btn = require('../models/edit');
const { rawListeners } = require('../app');
var session;


var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index Page', 
                        name: 'ATN shop'});
});

router.post('/selectshop', async function(req, res, next) {
  let session=req.session;
  if (session.user_id){
    let select_box_string= await select_box();
    let table_string2= await table_string(req.body.shop_name);
    res.render('direstor', {
    title: 'Direstor Page', 
    name: session.user_id,
    select_box:select_box_string,
    table: table_string2
  });
  }
  else {
    res.redirect('/login');
  }
  
});
// router.get('/selectshop', function(req,res,next){
//   let session=req.session;
//   if (session.user_id && session.role=='shop'){

//   res.redirect('/users');
//   }
// });
// router.get('/direstor', function(req,res,next){
//   if (req.session.user_id && req.session.role=='shop'){

//     res.redirect('/users');
//     }
//   });
//   router.get('/users', function(req,res,next){
//     if (req.session.user_id && req.session.role=='direstor'){
//       res.redirect('/direstor');
//       }
//     });
module.exports = router;
