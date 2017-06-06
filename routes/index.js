var authorJSON = require("../data/author.json")
var projectsJSON = require("../data/projects.json")

var author = authorJSON;
var projects = projectsJSON.projects;

exports.home = function(req, res){
  res.render('home', {
    title : "thiwwy design",
    author: author,
    projects: projects
  });
};
