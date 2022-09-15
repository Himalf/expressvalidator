const express = require('express');
const {createCategoryController,getCategoryController} = require('../controller/categorycontroller');
const router = express.Router();
router.post('/post',createCategoryController);
router.get('/',getCategoryController);
module.exports = router;
