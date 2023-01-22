const express =  require("express");
const userRouter = express.Router();
const { startGithubLogin,finishGithubLogin, logout , getEdit, postEdit, getChangePassword, postChangePassword} = require('../controllers/usercontroller')
const {protectordMiddleWare, publicOnlyMiddleware, avatarUpload } = require('../../middleware');

userRouter.get( "/github/start",publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/logout", protectordMiddleWare, logout);
//로그인이 되있어야만 publicOnlyMiddleware 미들웨어 적용을 받고 edit 수행가능.
//multer 동작 과정: input으로 avatar 파일을 받아서 uploads 폴더에 저장 후 그 파일정보를 postEdit 에 전달.
userRouter
  .route("/edit")
  .all(protectordMiddleWare)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit)
userRouter.route('/change-password')
  .all(protectordMiddleWare)
  .get(getChangePassword)
  .post(postChangePassword);
module.exports = userRouter;