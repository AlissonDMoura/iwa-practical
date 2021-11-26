const   express = require("express"),//Allow response to HTTP request, defines routing and renders the required content
        fs = require('fs'),//Working with the file system (Read and write files)
        http = require('http'),// HTTP server
        path = require('path'),//utility that allows work with directory paths
        xml2js = require('xml2js'),//This is XML <-> JSON converter
        xmlParse = require('xslt-processor').xmlParse,//Parsing XML
        xsltProcess = require('xslt-processor').xsltProcess; //Processing XSLT

const   router = express(), //Instantianting Express
        server = http.createServer(router);//Instantiating the server
router.use(express.static(path.resolve(__dirname,'views'))); //Serving Static content from "views" folder

router.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'}); // Tell the user the resource exists and the type.
    let xml = fs.readFileSync('PaddysCafe.xml', 'utf8'), // read in xml file
        xsl = fs.readFileSync('PaddysCafe.xsl', 'utf8');// read in xsl file

    console.log(xml);
    console.log(xls);

    let doc = xmlParse(xml), // Parse the XML file
        Stylesheet = xmlParse(xsl); // Parse the XLS file

    let result = xsltProcess(doc, Stylesheet);//Performing XSLT

    console.log(result);
    res.end(result.toString()); //Serve back the user


})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log('Server listening at ', addr.address + ': ' + addr.port)
});