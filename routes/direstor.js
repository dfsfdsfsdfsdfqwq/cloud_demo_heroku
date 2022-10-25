var express = require('express');
var router = express.Router();
const table_string = require('../models/table_string');
const select_box = require('../models/select_box');

var session;

router.get('/', async function(req, res, next) {
  let session=req.session;
  if (session.user_id){
    let select_box_string= await select_box(0);
    let table_string2= await table_string(0);
    res.render('direstor', {
      title: 'Direstor Page', 
      name: session.user_id,
      select_box:select_box_string,
      table: table_string2
    });
  }
  else {
    res.render('login', {title: 'Login Page',
                        })
  }
});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.redirect('/');
});




module.exports = router;
