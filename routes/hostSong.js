
/*
 * GET host song page.
 */

var song = require('../session.json');

exports.view = function(req, res){
  res.render('hostSong',song);
};