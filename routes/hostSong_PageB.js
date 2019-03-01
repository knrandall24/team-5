
/*
 * GET hostSong B page.
 */


var song = require('../songs.json');

exports.view = function(req, res){
  res.render('hostSong_pageB',song);
};