const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const User = require('../models/goalModel')

const asyncHandler = require('express-async-handler')



// @des Authenticate a USer
// Register new User 
// @route POST /api/users
// @access Public 



const registerUser = asyncHandler(async(req, res) => {
    const {name , email, password} = req.body
    if (!name|| !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    res.json({message: 'Register User'})
})


const loginUser = asyncHandler(async(req,res) => {
   
    res.json({message: `Login User`})
})

const getMe  = asyncHandler(async(req,res) => {
    res.json({message: `User data display`})
})




module.exports = {
    registerUser,
    loginUser,
    getMe,
    }
