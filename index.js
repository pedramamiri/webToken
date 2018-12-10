const express    = require('express');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
const bodyParser = require('body-parser');
const api        = require('./api')


var app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


// router signin
app.use('/api',api)



app.listen(3000, listening);
function listening(){
   console.log("listening on port 3000 . . .");
}