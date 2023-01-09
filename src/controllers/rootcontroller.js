const User = require('../models/User');
const Video = require('../models/Video');




module.exports.handleTrend = async (req,res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt:"desc" });
    return res.render('home', { pageTitle : "Home" , videos})
  } catch(err) {
    return res.render("Server- Error", err);
  }
}

module.exports.handleJoin= (req,res) => {
    res.send('JOIN')
} 



module.exports.getLogin = (req,res) => {
    res.render('login', {pageTitle: "Login"})
}


module.exports.postLogin = async(req,res) => {
  const {username, email } = req.body;
  const exists = await User.exists({username})
  if(!exists) {
    return res.status(400).render("login", {pageTitle : "Login", errorMessage: "An account with this username does not exists !"})
  }
};