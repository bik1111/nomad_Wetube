const express =  require("express");
const  storyRouter = express.Router();
const { handleWatch, handleEdit, handleDelete }  = require('../controllers/storycontroller')

storyRouter.get('/:id(\\d+)', handleWatch);
storyRouter.get('/:id(\\d+)/edit', handleEdit);
storyRouter.get('/:id(\\d+)/delete', handleDelete);


module.exports = storyRouter;
