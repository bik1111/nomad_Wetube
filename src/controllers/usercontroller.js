const { application, json } = require('express');
const User = require('../models/User');
const fetch = require('node-fetch');


module.exports.getJoin = (req,res) => {
    res.render('join', {pageTitle: "Join"})
}

module.exports.postJoin = async(req,res) => {
    const { username, email, password }  = req.body;
    const pageTitle = "Join";
    const exists = await User.exists({ $or: [{ username }, { email }] });
    if(exists){
        return res.status(400).render('join', {
            pageTitle, 
            errorMessage : "This username/email is alreay taken !"})
    }
    try {
        await User.create({
            username,
            email,
            password,
        });
        return res.redirect('/login');
    } catch (error) {
        return res.status(400).render("join", {
          pageTitle: "Upload Video",
          errorMessage: error._message,
        });
    }
}


module.exports.startGithubLogin = (req, res) => {
    const baseUrl = "https://github.com/login/oauth/authorize";
    const config = {
      client_id:process.env.GH_CLIENT,
      allow_signup: false,
      scope: "read:user user:email",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl);
  };

  module.exports.finishGithubLogin = async (req, res) => {
    //to get access-token
    const baseUrl = "https://github.com/login/oauth/access_token";
    const config = {
      client_id: process.env.GH_CLIENT,
      client_secret: process.env.GH_SECRET,
      code: req.query.code,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    //result to request to get access-token 
    const tokenRequest = await (
      await fetch(finalUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      })
    ).json();
    if ("access_token" in tokenRequest) {
      const { access_token } = tokenRequest;
      // to get user Info
      const apiUrl = "https://api.github.com";
      const userData = await (
        await fetch(`${apiUrl}/user`, {
          headers: {
            Authorization: `token ${access_token}`,
          },
        })
      ).json();
      console.log(userData);
      //to get user email
      const emailData = await (
        await fetch(`${apiUrl}/user/emails`, {
          headers: {
            Authorization: `token ${access_token}`,
          },
        })
      ).json();
      const emailObj = emailData.find((email) => email.primary === true && email.verified === true );
      if(!emailObj){
        return res.redirect("/login");

      } 
      let user = await User.findOne({email : emailObj.email})
      if (!user) {
        // create account.
        const user = await User.create({
          avataUrl: userData.avataUrl,
          username : userData.name,
          email : emailObj.email,
          password :"",
          socialOnly:true,
        });
      } else { //해당 이메일을 가지고 있는 user가 존재한다면,
        req.session.loggedIn = true;
        req.session.user = user;
        return res.redirect('/')
      };
      } else { 
      return res.redirect("/login");
    }
  };


  module.exports.logout = (req,res) => {
    req.session.destroy();
    return res.redirect('/')

  }