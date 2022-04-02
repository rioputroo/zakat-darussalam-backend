const asyncHandler = require('express-async-handler')

const Zakat = require('../models/zakatModel')
const User = require('../models/userModel')

// @desc    Get Zakat
// @route   GET /api/zakat
// @access  Private
const getZakat = asyncHandler(async (req, res) => {
    const zakat = await Zakat.find({ user: req.user.id })

    res.status(200).json(zakat)
})

// @desc    Set Zakat
// @route   POST /api/zakat
// @access  Private
const setZakat = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const zakat = await Zakat.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(zakat)
})

// @desc    Update Zakat
// @route   PUT /api/zakat/:id
// @access  Private
const updateZakat = asyncHandler(async (req, res) => {
    const zakat = await Zakat.findById(req.params.id)

    if (!zakat) {
        res.status(400)
        throw new Error('Zakat not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the zakat user
    if (zakat.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedZakat = await Zakat.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    res.status(200).json(updatedZakat)
})

// @desc    Delete Zakat
// @route   DELETE /api/zakat/:id
// @access  Private
const deleteZakat = asyncHandler(async (req, res) => {
    const zakat = await Zakat.findById(req.params.id)

    if (!zakat) {
        res.status(400)
        throw new Error('Zakat not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the zakat user
    if (zakat.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await zakat.remove()
    
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getZakat,
    setZakat,
    updateZakat,
    deleteZakat
}