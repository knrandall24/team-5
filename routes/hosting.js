
/*
 * GET hosting page.
 */

var song = require('../songs.json');

exports.view = function(req, res){
  res.render('hosting',song);
};