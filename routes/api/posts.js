const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Post = require('../../models/Post');



// @route   GET api/posts
// @desc    Get all posts
// @access  public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
});



// @route   POST api/posts
// @desc    Cteate a Post
// @access  public
router.post('/', (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    message: req.body.message
  });

  newPost
    .save()
    .then(item => res.json(item));
});



// @route   DELETE api/posts/:id
// @desc    Delete a Post
// @access  public
router.delete('/:id', (req, res) => {

  Post.findById(req.params.id)
    .then(
      item =>
        item.remove()
          .then(() =>
            res.json({ success: true })
          )
    )
    .catch(err => res.status(404).json({ success: false }));
});



// Export
module.exports = router;