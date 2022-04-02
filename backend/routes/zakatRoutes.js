const express = require('express')
const router = express.Router()
const { getZakat, setZakat, updateZakat, deleteZakat } = require('../controllers/zakatController')

router.route('/').get(getZakat).post(setZakat)
router.route('/:id').delete(deleteZakat).put(updateZakat)
 
module.exports = router