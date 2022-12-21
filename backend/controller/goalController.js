const asyncHandler = require('express-async-handler')

const GetGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Get Goals"})

})
const SetGoal = asyncHandler(async(req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error("Please add text ")
    }
    res.status(200).json({message: "Set Goal"})

})
const UpdateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})

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
