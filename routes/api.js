var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI)
var ResumeCollection = db.get('resumes')
var UserCollection = db.get('users')

router.get('/posts', function (req, res, next) {
  ResumeCollection.find({}).then(function (posts) {
    res.json(posts);
  })
})

module.exports = router;
