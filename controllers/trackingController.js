const Tracking = require('../models/trackingModel');

exports.postLocation = async (req, res, io) => {
    //try {
        const { orderId, lat, lng } = req.body;
        
        // Debugging ke liye log lagayein
        console.log("Data received:", req.body);

    //     if (!orderId || !lat || !lng) {
    //         return res.status(400).json({ error: "Missing orderId, lat, or lng" });
    //     }

    //     // DB mein save karein
    //     await Tracking.saveLocation(orderId, lat, lng);
        
    //     // Live update bhejein
    //     io.emit(`locationUpdate-${orderId}`, { orderId, lat, lng });

    //     return res.status(200).json({ status: "Success", message: "Location Logged" });
    // } catch (err) {
    //     console.error("Controller Error:", err.message);
    //     return res.status(500).json({ error: "Database or Server Error" });
    // }
};