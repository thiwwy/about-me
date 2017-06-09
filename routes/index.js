var authorJSON = require("../data/author.json")
var passionsJSON = require("../data/passions.json")

var author = authorJSON;
var passions = passionsJSON.passions;

exports.home = function(req, res){
  res.render('home', {
    title : "About Silvia D'Auria",
    author: author,
    passions: passions
  });
};