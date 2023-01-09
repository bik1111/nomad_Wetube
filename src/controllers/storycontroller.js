const Video = require('../models/Video');
const mongoose = require('mongoose');
const { hash } = require('bcrypt');


module.exports.handleWatch= async (req,res) => {
    const id = req.params.id;
    // = const { id }  = req.params
    const video = await Video.findById(id);
    if (video === null) { 
        res.stauts(404).render("404", {pageTitle: "Video not found"})
    } else {
        res.render('watch', { pageTitle : video.title, video}) 
    }    



}

module.exports.getEdit = async (req,res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {         
        res.status(404).render("404",{pageTitle: "Video not found"})
    } else {
        return res.render('edit', { pageTitle : `Editing ${video.title}`, video})

    }
}

module.exports.postEdit = async (req,res) => {
        const { id } = req.params;
        const { title, description, hashtags } = req.body;
        const video = Video.exists({_id : id})
        if (!video) {         
            res.status(404).render("404",{pageTitle: "Video not found"})
        } 
        await Video.findByIdAndUpdate(id, {
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect(`/stories/${id}`)

}

module.exports.getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
  };


module.exports.postUpload = async (req, res) => {
    const {title, description, hashtags} = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect('/trending')
    } catch(error) {
        return res.satus(400).render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};


module.exports.deleteStory = async(req,res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect('/trending')
}

module.exports.search =  async(req,res) => {
    const { keyword } = req.query;
    let videos = []
    if(keyword){
        videos = await Video.find({
            title: {
                $regex: new RegExp(`${keyword}$`, "i"),
              },        
        })
        return res.render('search', {pageTitle: "Search", videos })

    }
    return res.render('search', {pageTitle : "Search"})
};