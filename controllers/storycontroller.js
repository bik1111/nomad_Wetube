const storyRouter = express.Router();

const handleWatch= (req,res) => {
    res.send(`I AM WATHCING # ${req.params.id}'S VIDEO`)
}

const handleEdit = (req,res) => {
    res.send(`EDIT STORY (ID : # ${req.params.id})`)
}

const handleDelete = (req,res) => {
    res.send(`DELETE STORY (ID: # ${req.params.id}`)
}