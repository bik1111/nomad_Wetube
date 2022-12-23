const storyRouter = express.Router();

const handleWatch= (req,res) => {
    res.send("WATCH STROY")
}

const handleEdit = (req,res) => {
    res.send("EDIT Story")
}

const handleDelete = (req,res) => {
    res.send('DELETE')
}

storyRouter.get('/:id', handleWatch);
storyRouter.get('/:id/edit', handleEdit);
storyRouter.get(':id/delete', handleDelete);


export default storyRouter;
