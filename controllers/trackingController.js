const Tracking = require('../models/trackingModel');

exports.postLocation = async (req, res, io) => {
    try {
        const { orderId, lat, lng } = req.body;
        await Tracking.saveLocation(orderId, lat, lng);
        
        // Socket.io se live broadcast bhi karein
        io.emit(`locationUpdate-${orderId}`, { orderId, lat, lng });

        res.status(200).json({ status: "Success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};