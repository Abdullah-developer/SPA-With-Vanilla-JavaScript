const express = require('express')
const path = require('path')

const app = express();

app.use('/static', express.static(path.resolve(__dirname, "client", 'static')));

app.get('/*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

app.listen(process.env.PORT || 5060, () => console.log("server is Running ..."));