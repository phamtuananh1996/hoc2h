const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const validator = require('express-validator');
const compression = require('compression');
const app = express();

require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {useMongoClient: true});
mongoose.connection.on('error', err => console.error(`MongoDB connection error: ${err}`));
app.use(compression());
app.use(validator());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(cors());

app.use('/api', require('./routes/api'));

app.get('*', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/client/dist'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
