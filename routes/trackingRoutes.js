const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

// Hum controller ko 'io' pass karne ke liye callback function use karenge
module.exports = (io) => {
    router.post('/log-location', (req, res) => trackingController.insertme(req, res, io));
    return router;
};