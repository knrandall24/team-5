
/*
 * GET hosting page.
 */

var song = require('../data.json');

exports.view = function(req, res){
  res.render('hosting',song);
};