const User = require('../models/User');



module.exports.getJoin = (req,res) => {
    res.render('join', {pageTitle: "Join"})
}

module.exports.postJoin = async(req,res) => {
    const { name, username, email, password , location} = req.body;
    const exists = await User.exists({$or : [{username}, {email}]})
    if(exists){
        return res.status(400).render('join', {pageTitle : "Join", errorMessage : "This username/email is alreay taken !"})
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        res.redirect('/login');
    } catch(e) {
        return res.status(404).render("join", {pageTitle: "Join", errorMessage: e._message});
    }

}