module.exports.handleUser = (req,res) => {
    res.send(`USER # ${req.parms.id}`)
}

module.exports.handleEditUser = (req,res) => {
    res.send("EDIT USER")
}
