
/*
 * GET host song page.
 */

var song = require('../session.json');

exports.view = function(request, response){
    song["viewAlt"] = false;
    response.render('hostSongAB', song);
};

exports.viewAlt = function(request, response){
    song["viewAlt"] = true;
    response.render('hostSongAB', song);
};