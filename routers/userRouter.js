const userRouter = express.Roter();
const { handleUser, handleEditUser } = require('../controllers/usercontroller');

userRouter.get('/:id', handleUser);
userRouter.get('/edit-profile', handleEditUser);

export default userRouter;