const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought 
} = require('../../controllers/thoughtController');

// /api/students
router.route('/')
.get(getThought) // GET /api/students
.post(createThought);

// /api/students/:studentId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)

// .delete(deleteStudent);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
