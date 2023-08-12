const express = require('express'); 
const router = express.Router();

const pregdetailController = require('../controllers/pregdetailController')

router.get('/pregdetail', pregdetailController.pregDetail);
router.get('/pregdetail/:id', pregdetailController.pregDetailById);
router.post('/pregdetail', pregdetailController.addPregDetail);
router.put('/pregdetail/:id', pregdetailController.updatePregDetail);
router.delete('/pregdetail/:id',pregdetailController.deletePregDetail);

module.exports = router;