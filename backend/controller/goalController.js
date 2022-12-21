const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


const GetGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({})
    res.status(200).json({message: "Get Goals"})

})
const SetGoal = asyncHandler(async(req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error("Please add text ")

    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json()

})
const UpdateGoal = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const UpdatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{ 
        new: true,
    })
    res.status(200).json(UpdateGoal)

})
const DeleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})


module.exports = {
    GetGoals,
    SetGoal,
    UpdateGoal,
    DeleteGoal,
}
