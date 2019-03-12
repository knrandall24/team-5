
/*
 * GET host streaming page.
 */

var song = require('../session.json');

exports.view = function(req, res){
  res.render('streaming',song);
};