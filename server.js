var express = require('express');
const http = require('http');
const status = require('http-status');
const cors = require('cors');
const router = require('./src/routes/router')

var app = express();
app.use(cors());

app.use(express.json());


router.createRoute(app)

app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send();
});

const port = process.env.PORT || 3000

app.set('port', port)

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`listen on ${port}`)
});