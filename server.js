const express     = require ('express');
const app		   = express();

var http = require('http').Server(app);

http.listen(process.env.PORT || 8080, function(){
    console.log("We are live on " + 8080);
});
