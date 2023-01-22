const express =  require("express");
const { protectordMiddleWare, videoUpload } = require("../../middleware");
const storyRouter = express.Router();
const { handleWatch, getEdit, postEdit, getUpload, postUpload, deleteStory }  = require('../controllers/storycontroller')

storyRouter.get('/:id([0-9a-f]{24})', handleWatch);

storyRouter.route('/:id([0-9a-f]{24})/edit').all(protectordMiddleWare).get(getEdit).post(postEdit);
storyRouter
    .route("/upload")
    .all(protectordMiddleWare)
    .get(getUpload)
    .post(postUpload)
    .post(videoUpload.single("video"), postUpload);


storyRouter.route('/:id([0-9a-f]{24})/delete').all(protectordMiddleWare).post(deleteStory)

module.exports = storyRouter;
