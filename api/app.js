const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cors = require('cors');
const compression = require('compression');
const helmet = require("helmet");

const indexRouter = require('./routes/index');
const testAPIRouter = require('./routes/testAPI');
const animationsRouter = require('./routes/animations');
const loginRouter = require('./routes/login').router;
const registerPage = require('./routes/register-page');
const animationList = require('./routes/animation-list');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, '../client/public/favicon.ico')));
app.use(compression());
app.use(helmet());

app.use('/', indexRouter);
app.use('/testAPI', testAPIRouter);
app.use('/animations', animationsRouter);
app.use('/login', loginRouter);
app.use('/register', registerPage);
app.use('/animation-list', animationList);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

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