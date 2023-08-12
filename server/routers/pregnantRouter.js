const express = require('express'); 
const router = express.Router();

const pregnantController = require('../controllers/auth/pregnantController')

router.get('/pregnant', pregnantController.pregnantAuth);
router.get('/pregnant/:id',pregnantController.pregnantAuthById);
router.post('/pregnant',pregnantController.addPregnantAuth);
router.put('/pregnant/:id', pregnantController.updatePregnantAuth);
router.delete('/pregnant/:id',pregnantController.deletePregnantAuth);


module.exports = router;