require('dotenv').config();

const rootRouter  = require("./src/routers/rootRouter");
const storyRouter = require("./src/routers/storyRouter")
const userRouter = require("./src/routers/userRouter");
const express =  require("express");
const morgan = require("morgan");
const session =require('express-session');
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const { localsMiddleware } = require("./middleware");
 

const app = express();
const logger = morgan("dev");
app.use(logger);


app.use(express.urlencoded({ extended:true }))
app.engine('pug', require('pug').__express)
app.set('view engine', "pug")
app.set('views', process.cwd() + '/src/views')



//세션 미들웨어
app.use(
    session ({
      secret : process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      //세션을 저장gkf Monogo Database
      store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
  );
//app.use(localsMiddleware)가 app.use(session) 다음으로 왔기에 req.session에 접근가능.
app.use(localsMiddleware)
app.use('/', rootRouter)
app.use('/users', userRouter)
app.use('/stories', storyRouter)

 module.exports = app

  
