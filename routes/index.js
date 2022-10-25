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


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index Page', 
                        name: 'ATN shop'});
});

module.exports = router;
