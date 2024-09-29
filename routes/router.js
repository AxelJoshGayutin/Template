const express = require('express');

const router = express.Router();
const cakeController = require("../controller/cakeController");

router.get('/', cakeController.index);
router.get('/cake/about', cakeController.about);
router.get('/cake/menuprice', cakeController.menuprice);
router.get('/cake/masterchef', cakeController.masterchef);
router.get('/cake/contact', cakeController.contact);

module.exports = router;