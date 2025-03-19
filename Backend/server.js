require("dotenv").config();
const http = require('http');
const app = require('./app');
const port  = process.env.PORT || 3000;
try {
    console.log("✅ Loaded ENV Variables:", process.env.PORT, process.env.DB_CONNECT);

    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
    });
} catch (error) {
    console.error("❌ Error starting the server:", error);
}