const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/',adminController.list);


module.exports=router;