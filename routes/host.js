
/*
 * GET hosting page.
 */

var sessions = require('../session.json');

exports.view = function(req, res){
  res.render('host',sessions);
};