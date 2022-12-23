const userRouter = express.Roter();

const handleUser = (req,res) => {
    res.send("USER")
}

const handleEditUser = (req,res) => {
    res.send("EDIT USER")
}


userRouter.get('/:id', handleUser);
userRouter.get('/edit-profile', handleEditUser);

export default userRouter;