module.exports.handleHome = (req,res) => {
    res.send('Home!!')
} 

module.exports.handleTrend = (req,res) => {
    const videos = [
        {
          title: "Hello",
          title: "First Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
        {
          title: "Video #2",
          title: "Second Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
        {
          title: "Whatsup",
          title: "Third Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
      ];
    return res.render('home', { pageTitle : "Home", videos })
}

module.exports.handleJoin= (req,res) => {
    res.send('JOIN')
} 

module.exports. handleNew = (req,res) => {
    res.send("NEW")
}
module.exports.handleLogin = (req,res) => {
    res.send("LOGIN")
}
