// require("dotenv").config();
const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket')
const port  = process.env.PORT || 3000;
try {
   

    const server = http.createServer(app);
    initializeSocket(server);

    server.listen(port, () => {
        console.log(` Server is running on port ${port}`);
    });
} catch (error) {
    console.error("❌ Error starting the server:", error);
}