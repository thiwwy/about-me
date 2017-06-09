var authorJSON = require("../data/author.json")
var passionsJSON = require("../data/passions.json")

var author = authorJSON;
var passions = passionsJSON.passions;

exports.about_me = function(req, res){
  res.render('about_me', {
    title : "About Silvia D'Auria",
    author: author,
    passions: passions
  });
};

exports.about_you = function(req, res){
  res.render('about_you', {
    title : "About Silvia D'Auria",
    author: author,
    passions: passions
  });
};
