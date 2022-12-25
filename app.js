const globalRouter = require('./src/routers/globalRouter')
const userRouter = require("./src/routers/userRouter")
const storyRouter = require("./src/routers/storyRouter")

const express =  require("express");
const morgan = require("morgan");


const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);


app.engine('pug', require('pug').__express)
app.set('view engine', "pug")
app.set('views', process.cwd() + '/src/views')
app.use('/', globalRouter)
app.use('/users', userRouter)
app.use('/stories', storyRouter)



const handleListening = () =>
 {console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);}


 app.listen(PORT, handleListening);

 module.exports = app

  
