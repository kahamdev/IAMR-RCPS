const express = require('express'); 
const router = express.Router();

const adminController = require('../controllers/auth/adminController')

router.get('/admin', adminController.admin);
router.get('/admin/:id', adminController.adminById);


module.exports = router;