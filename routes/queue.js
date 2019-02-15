
/*
 * GET queue page.
 */

var song = require('../songs.json');

exports.view = function(req, res){
  res.render('queue', song);
};

