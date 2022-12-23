const globalRouter = express.Router();


const handleHome = (req,res) => {
    res.send('Home')
} 

const handleTrend = (req,res) => {
    res.send('TREND')
}

const handleJoin= (req,res) => {
    res.send('JOIN')
} 

const handleNew = (req,res) => {
    res.send("NEW")
}

const handleLogin = (req,res) => {
    res.send("LOGIN")
}


globalRouter.get('/' , handleHome);
globalRouter.get('/trending', handleTrend);
globalRouter.get('/new', handleNew);
globalRouter.get('/join', handleJoin);
globalRouter.get('/login', handleLogin);


export default globalRouter;