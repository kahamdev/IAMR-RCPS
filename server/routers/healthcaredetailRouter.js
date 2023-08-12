const express = require('express'); 
const router = express.Router();

const healthcaredetailController = require('../controllers/healthcaredetailController')

router.get('/healthcaredetail', healthcaredetailController.healthcaredetail);
router.get('/healthcaredetail/:id', healthcaredetailController.healthcaredetailById);
router.post('/healthcaredetail', healthcaredetailController.addHealthcareDetail);
router.put('/healthcaredetail/:id', healthcaredetailController.updateHealthcareDetail);
router.delete('/healthcaredetail/:id',healthcaredetailController.deleteHealthcareDetail);

module.exports = router;