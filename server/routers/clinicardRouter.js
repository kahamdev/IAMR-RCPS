const express = require('express'); 
const router = express.Router();

const clinicardController = require('../controllers/clinicardController')

router.get('/clinicard', clinicardController.clinicard);
router.get('/clinicard/:id', clinicardController .clinicardById);
router.post('/clinicard', clinicardController.addClinicard);
router.put('/clinicard/:id', clinicardController.updateClinicard);
router.delete('/clinicard/:id',clinicardController.deleteClinicard);

module.exports = router;