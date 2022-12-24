const globalRouter = require('./routers/globalRouter')
const userRouter = require("./routers/userRouter")
const storyRouter = require("./routers/storyRouter")

const express =  require("express");
const morgan = require("morgan");


const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);


app.use('/', globalRouter)
app.use('/users', userRouter)
app.use('/stories', storyRouter)



const handleListening = () =>
 {console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);}


 app.listen(PORT, handleListening);

 module.exports = app

  
