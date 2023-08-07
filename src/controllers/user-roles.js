const { user_roles } = require("../models");

module.exports = {
    getAllData: (req, res) => {
        user_roles.findAll().then(data => {
            res.status(200).send({
                message: "Success",
                data
            })
        }).catch(err => {
            res.status(422).send({
                message: "Fail",
                errors: err.original
            })
        })
    }
}