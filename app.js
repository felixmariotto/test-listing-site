
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const socketIO = require('socket.io');

//

console.log( 'production server' )

//

const app = express()

	.use(express.static(path.join(__dirname, 'build')))

	.get('/ping', function (req, res) {
	 return res.send('pong');
	})

	.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
	})

	.listen(process.env.PORT || 8080)



/////////////////
//  SOCKET.IO
/////////////////

const io = socketIO( app );

io.on('connection', (socket)=> {

	console.log('client connected');

	socket.on('landlordCredentials', (message)=> {
		console.log(message);
	});

});
