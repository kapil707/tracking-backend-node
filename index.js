const express = require('express');
const {logReqRes} = require("./middlewares");
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

//Middleware - plugin
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//app.use(logReqRes("log.txt"));

app.use(cors());

// Routes setup
const trackingRoutes = require('./routes/trackingRoutes')(io);
app.use('/api', trackingRoutes);

// Socket Logic
io.on('connection', (socket) => {
    console.log('User Connected:', socket.id);
    
    socket.on('updateLocation', async (data) => {
        const Tracking = require('./models/trackingModel');
        await Tracking.saveLocation(data.orderId, data.lat, data.lng);
        io.emit(`locationUpdate-${data.orderId}`, data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MVC Server running on port ${PORT}`);
});