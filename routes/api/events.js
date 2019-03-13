const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Event = require('../../models/Event');



// @route   GET api/events
// @desc    Get all events
// @access  public
router.get('/', (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(events => res.json(events))
});



// @route   POST api/events
// @desc    Cteate a Post
// @access  public
router.post('/', (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    type: 'event',
    description: req.body.description,
    place: {
      name: req.body.place.name,
      location: req.body.place.location,
    },
    start_date: req.body.start_date,
    end_date: req.body.end_date || null,
    due_date: req.body.end_date || req.body.start_date
  });

  newEvent
    .save()
    .then(item => res.json(item));
});



// @route   DELETE api/events/:id
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