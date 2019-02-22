
/*
 * GET host streaming page.
 */

var song = require('../songs.json');

exports.view = function(req, res){
  res.render('streaming',song);
};