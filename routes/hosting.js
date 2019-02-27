
/*
 * GET hosting page.
 */

var friend = require('../data.json');

exports.view = function(req, res){
  res.render('hosting',friend);
};