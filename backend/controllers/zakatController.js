const asyncHandler = require('express-async-handler')

// @desc    Get Zakat
// @route   GET /api/zakat
// @access  Private
const getZakat = asyncHandler(async (req, res) => {
     res.status(200).json({
        message: 'Get Zakat'
    })
})

// @desc    Set Zakat
// @route   POST /api/zakat
// @access  Private
const setZakat = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({
        message: 'Set Zakat'
    })
})

// @desc    Update Zakat
// @route   PUT /api/zakat/:id
// @access  Private
const updateZakat = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update Zakat ${req.params.id}`
    })
})

// @desc    Delete Zakat
// @route   DELETE /api/zakat/:id
// @access  Private
const deleteZakat = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete Zakat ${req.params.id}`
    })
})

module.exports = {
    getZakat,
    setZakat,
    updateZakat,
    deleteZakat
}