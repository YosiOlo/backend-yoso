const { divisi } = require("../models");

module.exports = {
    getDataDivisi: (req, res) => {
        divisi.findAll().then(data => {
            res.status(200).send({
                message: "Success",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    create: (req, res) => {
        const nama = req.body.nama?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        divisi.create({
            nama: nama,
            created_at: new Date(),
            updated_at: new Date(),
        }).then(data => {
            res.status(201).send({
                message: "Create data successfully",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },

    update: (req, res) => {
        const nama = req.body.nama?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        const id = req.params.id

        divisi.update({ nama, updated_at: new Date() }, { where: { id } }).then(data => {
            res.status(200).send({
                message: "Update data successfully",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },

    delete: (req, res) => {
        const id = req.params.id;

        divisi.update({ deleted_at: new Date() }, { where: { id } }).then(data => {
            res.status(200).send({
                message: "Delete data successfully",
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },
}