const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought 
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
.get(getThought) // GET /api/thought
.post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);



module.exports = router;
