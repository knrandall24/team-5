
/*
 * GET search for session page.
 */
var sessions = require('../songs.json');

exports.view = function(req, res){
  res.render('search', sessions);
};

