const express = require('express'); 
const router = express.Router();

const askHelpController = require('../controllers/askhelpController')

router.get('/askhelp', askHelpController.askHelp);
router.get('/askhelp/:id',askHelpController.askHelpById);
router.post('/askhelp', askHelpController.addAskHelp);
router.delete('/askhelp/:id',askHelpController.deleteAskHelp);

module.exports = router;