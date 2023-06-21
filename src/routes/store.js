const express = require('express');
const router = express.Router();
const storeController = require('../app/controllers/storeController');
router.post('/:store_id/jobrequest', storeController.sendRequest);
module.exports = router;