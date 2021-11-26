const   express = require("express"),//Allow response to HTTP request, defines routing and renders the required content
        fs = require('fs'),//Working with the file system (Read and write files)
        http = require('http'),// HTTP server
        path = require('path'),//utility that allows work with directory paths
        xml2js = require('xml2js'),//This is XML <-> JSON converter
        xmlParse = require('xslt-processor').xmlParse,//Parsing XML
        xsltProcess = require('xslt-processor').xsltProcess; //Processing XSLT

const   router = express(),
        server = http.createServer(router);
router.use(express.static(path.resolve(__dirname,'views'))); //Serving Static content from "views" folder