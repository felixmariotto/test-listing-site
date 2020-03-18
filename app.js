
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const socketIO = require('socket.io');

const { Pool } = require('pg');
const POOL = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: true
})

const PORT = process.env.PORT || 8080;

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

	.listen(PORT, ()=> {
		console.log('app listening on port ' + PORT);
	})



/////////////////
//  SOCKET.IO
/////////////////

const io = socketIO( app );

io.on('connection', async (socket)=> {

	console.log('client connected');

	//

	sendTableInfo();

	//

	socket.on('landlordCredentials', async (message)=> {

		console.log( 'credentials received: ', message );

		var postgresClient = await POOL.connect();

		postgresClient.query(`INSERT INTO landlords (
								 name,
								 address,
								 amount
								) VALUES (
								 '${ message.name }',
								 '${ message.address }',
								 '${ message.amount }'
								)`).then( ()=> {

									sendTableInfo();

								});

		postgresClient.release();

	});

	//

	socket.on('search', async (message)=> {

		var postgresClient = await POOL.connect();

		postgresClient.query(`SELECT * FROM landlords
							  WHERE name LIKE '${ message }%'`).then( (data)=> {

							  	socket.emit( 'tableInfo', data.rows );

							 });

	});

	//

	async function sendTableInfo() {

		var postgresClient = await POOL.connect();

		postgresClient.query(`SELECT * FROM landlords
							  ORDER BY id DESC`).then( (data)=> {

			socket.emit( 'tableInfo', data.rows );

		});

		postgresClient.release();

	};

});


