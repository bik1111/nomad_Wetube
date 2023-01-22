const multer = require('multer');

module.exports.localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
//locals는 자동으로 views로 import 된다.

}
//유저가 로그인 되있다면 다음 동작 수행 가능, 그렇지 않으면 로그인 페이지로 리다이렉트.
module.exports.protectordMiddleWare = (req,res,next) => {
    // loggedIn은 유저가 로그인 할 때 session에 저장되는 정보, 
    //session에 저장되어 있으므로 어느 controller 나 middleware에서 접근가능.
    if(req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
    next();
};



//로그인 한 사람들에게만 적용되는 미들웨어. -> 로그인 되어있지 않으면 요청을 계속하게 하고, 로그인 돼 있으면 홈으로 리다이렉트.
module.exports.publicOnlyMiddleware = (req,res,next) => {
    if(!req.session.loggedIn) {
        next();
    } else {
        res.redirect('/')
    }
    
}

module.exports.avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
  });


module.exports.videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
      fileSize: 10000000,
    },
  });
