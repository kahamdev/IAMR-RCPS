const express = require('express'); 
const router = express.Router();

const visitcardController = require('../controllers/visitcardController')

router.get('/visitform', visitcardController.Visitcard);
router.get('/visitform/:id', visitcardController.VisitcardById);
router.post('/visitform',visitcardController.addVisitcard);
router.put('/visitform/:id', visitcardController.updateVisitcard);
router.delete('/visitform/:id',visitcardController.deleteVisitcard);

module.exports = router;