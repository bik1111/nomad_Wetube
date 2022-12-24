
module.exports.handleWatch= (req,res) => {
    res.send(`I AM WATHCING # ${req.params.id}'S VIDEO`)
}

module.exports.handleEdit = (req,res) => {
    res.send(`EDIT STORY (ID : # ${req.params.id})`)
}

module.exports.handleDelete = (req,res) => {
    res.send(`DELETE STORY (ID: # ${req.params.id}`)
}