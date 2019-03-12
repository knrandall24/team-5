
/*
 * GET queue page.
 */

var song = require('../session.json');

exports.view = function(req, res){
  res.render('queue', song);
};

