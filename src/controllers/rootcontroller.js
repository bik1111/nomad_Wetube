const { findOne } = require('../models/User');
const User = require('../models/User');
const Video = require('../models/Video');
const bcrypt = require('bcrypt');



module.exports.handleTrend = async (req,res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt:"desc" });
    return res.render('home', { pageTitle : "Home" , videos})
  } catch(err) {
    return res.render("Server- Error", err);
  }
}




module.exports.getLogin = (req, res) =>
res.render("login", { pageTitle: "Login" });


module.exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username, socialOnly: false });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  console.log(req.session);
  return res.redirect("/");
};