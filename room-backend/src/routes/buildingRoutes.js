const express = require('express');
const router = express.Router();
const { setAcStatusController, addRoomController, setDefaultTempController } = require('../controllers/buildingController');

router.get('/', setAcStatusController);
router.post('/addroom', addRoomController);
router.post('/setTemp', setDefaultTempController);

module.exports = router;
