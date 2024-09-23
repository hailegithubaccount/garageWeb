const express = require('express');
const router = express.Router();
const installRouter = require('./install.routes'); // Ensure this is a valid router

// Mount installRouter on a base path, e.g., '/install'
router.use(installRouter);

module.exports = router;

