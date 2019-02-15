
/*
 * GET search for session page.
 */
var session = require('../session.json');

exports.view = function(req, res){
  res.render('search',session);
};

