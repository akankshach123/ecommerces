var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter=require('./routes/product.routes')
var authrRouter=require('./routes/auth.routes');
//const middlewear=require('./middlerwear/middlewear')
const orderRouter=require('./routes/order.routes');
const categoryRouter=require('./routes/category.routes');
const paymentRouter=require('./routes/payment.routes');
const order_itemsRouter=require('./routes/order_items.router');
const adminRouter=require('./routes/admin.routes');
const MainRouter=require('./routes/Main.routes');
const subRouter=require('./routes/sub routes ');
const imagesRouter=require('./routes/images.routes')
const offerRouter= require('./routes/offer.routes')
const colorimgsRouter=require('./routes/colorsimages.routes')

var app = express();
 
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));

app.use('/', indexRouter);
app.use('/users',usersRouter);
app.use('/product',productRouter);
app.use('/auth',authrRouter);
app.use('/order',orderRouter);
app.use('/category',categoryRouter);
app.use('/payment',paymentRouter);
app.use('/orderi',order_itemsRouter);
app.use('/admin',adminRouter);
app.use('/subc',subRouter);
app.use('/mainc',MainRouter);
app.use('/images',imagesRouter);
app.use('/offer',offerRouter)
app.use('/colorsi',colorimgsRouter);


module.exports = app;
