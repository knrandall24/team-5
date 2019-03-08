
/*
 * GET hosting page.
 */

var friend = require('../session.json');

exports.view = function(req, res){
  res.render('hosting',friend);
};