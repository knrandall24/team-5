
/*
 * GET hostSong B page.
 */


var song = require('../session.json');

exports.view = function(req, res){
  res.render('hostSongB',song);
};

// var song = require('../session.json');

// exports.viewAlt = function(request, response){
//     song["viewAlt"] = true;
//     response.render('hostSongAB', song);
// };