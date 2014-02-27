
/*
 * GET home page.
 */

exports.content = function(req, res){
  res.render('content', { title: 'you have arrived at a content page' });
};