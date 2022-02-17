const path = require('path');
const express = require('express');

const app = express();

// import routers
const captionRouter = require('./routes/captionRouter');

// run the server on 3000
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.join(__dirname, 'dist')));

// CONTROLLERS GO HERE
app.use('/api/captions', captionRouter);

// catch-all route handler
app.use((req, res) =>
	res.status(404).send(`Ruh-roh! We've got an error on our hands.`)
);

// global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

// start the server
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
