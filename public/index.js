const express = require('express');
const router = express.Router();
const thirdPartApi = require("./controllers/thirdPartApi");


router.get('/tempData', thirdPartApi.getTempData);

module.exports = router;
