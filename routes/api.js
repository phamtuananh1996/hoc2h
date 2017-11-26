const express = require('express');
const router = express.Router();

require('../controllers/auth')(router);
require('../controllers/category')(router);
require('../controllers/test')(router);
module.exports = router;
