const express = require('express');
const router = express.Router();
const controllerPerson = require('../controllers/controllerPerson')

//api routes

router.post('/', controllerPerson.createPerson)

module.exports = router;