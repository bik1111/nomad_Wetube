const express =  require("express");
const storyRouter = express.Router();
const { handleWatch, getEdit, postEdit, getUpload, postUpload, deleteStory }  = require('../controllers/storycontroller')

storyRouter.get('/:id([0-9a-f]{24})', handleWatch);

storyRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
storyRouter.route('/upload').get(getUpload).post(postUpload);
storyRouter.route('/:id([0-9a-f]{24})/delete').post(deleteStory)

module.exports = storyRouter;
