var app = require('./server-config.js');

var port = process.env.SERVER_PORT || 4568;

// start server
app.listen(port);

console.log('Server now listening on port ' + port);

