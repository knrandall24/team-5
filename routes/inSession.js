
/*
 * GET search for session page.
 */
var friend = require('../data.json');

exports.view = function(req, res){
  res.render('search',friend);
};

