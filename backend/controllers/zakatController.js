const asyncHandler = require('express-async-handler')

const Zakat = require('../models/zakatModel')

// @desc    Get Zakat
// @route   GET /api/zakat
// @access  Private
const getZakat = asyncHandler(async (req, res) => {
    const zakat = await Zakat.find()


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
        text: req.body.text
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

    await zakat.remove()
    
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getZakat,
    setZakat,
    updateZakat,
    deleteZakat
}