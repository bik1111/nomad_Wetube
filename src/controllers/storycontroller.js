




module.exports.handleWatch= (req,res) => {
    res.render('watch', { pageTitle : "Watch" })
}

module.exports.handleEdit = (req,res) => {
    res.render('edit', { pageTitle : "Edit" })
}

module.exports.handleDelete = (req,res) => {
    res.send(`DELETE STORY (ID: # ${req.params.id}`)
}