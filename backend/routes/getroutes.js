const express = require("express")
const router = express.Router()

const {
   GetGoals, 
   SetGoal,
   UpdateGoal,
   DeleteGoal } = require('../controller/goalController')

router.route('/').get(GetGoals).post(SetGoal)
router.route('/:id').delete(DeleteGoal).put(UpdateGoal)

router.get('/',GetGoals)
router.post('/', SetGoal)
router.put('/:id',UpdateGoal)
router.delete('/:id', DeleteGoal)


module.exports = router 

