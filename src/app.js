require('dotenv').config();
const http = require("http");
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

if (require.main === module) {
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });
}

module.exports = app;
