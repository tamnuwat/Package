var app = require('express')();

var port = process.env.PORT || 8081;

app.get('/', function (req, res) {
    res.send('<h1> Hello World</h1>');
});

app.get('/index1', function (req, res) {
    res.send('<h1>This is index1 page</h1>');
});

app.get('/index2', myFunction);


function myFunction(req,res)
{
    res.send('<h1>This is index2 page</h1>');
}


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
