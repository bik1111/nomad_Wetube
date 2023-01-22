const express =  require("express");
const { publicOnlyMiddleware } = require("../../middleware");
const rootRouter = express.Router();
const { handleTrend, getLogin, postLogin } = require('../controllers/rootcontroller')
const { search } = require('../controllers/storycontroller');
const { getJoin, postJoin } = require('../controllers/usercontroller');


rootRouter.get('/', handleTrend);
rootRouter.route('/join').all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter.route('/login').all(publicOnlyMiddleware).get(getLogin).post(postLogin)
rootRouter.get('/search', search)

module.exports = rootRouter;