const { ukuran } = require("../models")

module.exports = {
    getUkuran: (req, res) => {
        ukuran.findAll().then(data => {
            res.status(200).send({
                message: "Success getting data",
                data
            })
        }).catch(error => {
            res.status(422).send({ error })
        })
    },

    createUkuran: (req, res) => {
        const nama = req.body.nama?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        ukuran.create({
            nama: nama,
            created_at: new Date(),
            updated_at: new Date(),
        }).then(data => {
            res.status(201).send({
                message: "Created",
                data
            })
        }).catch(error => {
            res.status(422).send({ message: error })
        })
    },

    updateUkuran: (req, res) => {
        const { nama } = req.body;

        const id = req.params.id;

        ukuran.update({ nama, updated_at: new Date() }, { where: { id } }).then(() => {
            res.status(200).send({ message: "Success update data" })
        }).catch(error => {
            res.status(200).send({ error })
        })
    },

    deleteUkuran: (req, res) => {
        const id = req.params.id;

        ukuran.update({ deleted_at: new Date() }, { where: { id } }).then(() => {
            res.status(200).send({ message: "Success delete data" })
        }).catch(error => {
            res.status(200).send({ error })
        })
    }
}