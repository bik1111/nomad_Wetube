const storyRouter = express.Router();
const { handleWatch, handleEdit, handleDelete } = require('../controllers/storycontroller')

storyRouter.get('/:id', handleWatch);
storyRouter.get('/:id/edit', handleEdit);
storyRouter.get('/:id/delete', handleDelete);


export default storyRouter;
