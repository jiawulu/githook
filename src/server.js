#!/usr/bin/env node

exports.startServer = function (program) {

    var http = require("http"),
        url = require("url"),
        path = require("path"),
        fs = require("fs");
    port = program.port || 80;

    http.createServer(function (req, res) {

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("success");

        require('./build').run(program);

    }).listen(port);

    console.log("Server running at http://127.0.0.1:" + port);

}