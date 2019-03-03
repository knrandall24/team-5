
/*
 * GET hostSong A page.
 */

var song = require('../session.json');

exports.view = function(req, res){
  res.render('hostSongA',song);
};

// var song = require('../session.json');

// exports.view = function(request, response){
//     song["viewAlt"] = false;
//     response.render('hostSongAB', song);
// };