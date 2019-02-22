
/*
 * GET stream page.
 */

var data = require('../session.json');

exports.view = function(req, res){
  res.render('stream',data);
};