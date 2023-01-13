const express =  require("express");
const userRouter = express.Router();
const { startGithubLogin,finishGithubLogin, logout  } = require('../controllers/usercontroller')

userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/logout", logout);
module.exports = userRouter;