import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);


app.use('/', globalRouter)
app.use('/users', userRouter)
app.use('/stories', storyRouter)