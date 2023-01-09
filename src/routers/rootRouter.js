const express =  require("express");
const rootRouter = express.Router();
const { handleTrend, getLogin, postLogin } = require('../controllers/rootcontroller')
const { search } = require('../controllers/storycontroller');
const { getJoin, postJoin } = require('../controllers/usercontroller');


rootRouter.get('/', handleTrend);
rootRouter.get('/join',getJoin);
rootRouter.post('/join', postJoin);
rootRouter.route('/login').get(getLogin).post(postLogin)
rootRouter.get('/search', search)

module.exports = rootRouter;