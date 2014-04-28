
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Who is the Spy', shit: 'wtf' });
};