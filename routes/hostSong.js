
/*
 * GET host song page.
 */

var song = require('../songs.json');

exports.view = function(req, res){
  res.render('hostSong',song);
};