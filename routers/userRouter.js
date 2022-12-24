const express =  require("express");
const userRouter = express.Router();
const { handleUser, handleEditUser }= require('../controllers/usercontroller')

userRouter.get('/:id', handleUser);
userRouter.get('/edit-profile', handleEditUser);

module.exports = userRouter;