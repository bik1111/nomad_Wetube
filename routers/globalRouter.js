const globalRouter = express.Router();
const { handleHome, handleTrend, handleNew, handleJoin, handleLogin } = require('../controllers/globalcontroller');


globalRouter.get('/' , handleHome);
globalRouter.get('/trending', handleTrend);
globalRouter.get('/new', handleNew);
globalRouter.get('/join', handleJoin);
globalRouter.get('/login', handleLogin);


export default globalRouter;