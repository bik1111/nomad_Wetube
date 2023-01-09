
const rootRouter  = require("./src/routers/rootRouter");
const storyRouter = require("./src/routers/storyRouter")
const userRouter = require("./src/routers/userRouter");
const express =  require("express");
const morgan = require("morgan");



const app = express();
const logger = morgan("dev");
app.use(logger);


app.use(express.urlencoded({ extended:true }))
app.engine('pug', require('pug').__express)
app.set('view engine', "pug")
app.set('views', process.cwd() + '/src/views')
app.use('/', rootRouter)
app.use('/users', userRouter)
app.use('/stories', storyRouter)



 module.exports = app

  
