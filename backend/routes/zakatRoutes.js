const express = require('express')
const router = express.Router()
const { getZakat, setZakat, updateZakat, deleteZakat } = require('../controllers/zakatController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getZakat).post(protect, setZakat)
router.route('/:id').delete(protect, deleteZakat).put(protect, updateZakat)
 
module.exports = router