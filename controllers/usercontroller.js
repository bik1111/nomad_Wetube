const handleUser = (req,res) => {
    res.send(`USER # ${req.parms.id}`)
}

const handleEditUser = (req,res) => {
    res.send("EDIT USER")
}
