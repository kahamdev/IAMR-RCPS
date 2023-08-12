const express = require('express'); 
const router = express.Router();

const providerController = require('../controllers/auth/providerController')

router.get('/provider', providerController.healthcareAuth);
router.get('/provider/:id',providerController.healthcareAuthById);
router.post('/provider',providerController.addHealthcareAuth);
router.put('/provider/:id',providerController.updateHealthcareAuth);
router.delete('/provider/:id',providerController.deleteHealthcareAuth);

module.exports = router;