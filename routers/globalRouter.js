const express =  require("express");
const globalRouter = express.Router();
const {handleHome, handleTrend, handleJoin, handleNew, handleLogin } = require('../controllers/globalcontroller')


globalRouter.get('/' , handleHome);
globalRouter.get('/trending', handleTrend);
globalRouter.get('/new', handleNew);
globalRouter.get('/join', handleJoin);
globalRouter.get('/login', handleLogin);


module.exports = globalRouter;