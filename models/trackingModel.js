const db = require('../config/db');

class Tracking {
    static async saveLocation(orderId, lat, lng) {
        const sql = "INSERT INTO tracking_logs (order_id, lat, lng) VALUES (?, ?, ?)";
        return db.execute(sql, [orderId, lat, lng]);
    }
}

module.exports = Tracking;