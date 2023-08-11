const { suplier } = require("../models");

module.exports = {
    getDataSuplier: (req, res) => {
        suplier.findAll().then(data => {
            res.status(200).send({
                message: "Success",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    create: (req, res) => {
        const body = {
            nama: req.data.nama,
            alamat: req.data.alamat,
            fax: req.data.fax,
            kontak: req.data.kontak,
            created_at: new Date(),
            updated_at: new Date(),
        };

        suplier.create(body).then(data => {
            res.status(201).send({
                message: "Create data successfully",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },

    update: (req, res) => {
        const body = {
            ...req.data,
            updated_at: new Date(),
        };

        const id = req.params.id

        suplier.update(body, { where: { id } }).then(data => {
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

        suplier.update({ deleted_at: new Date() }, { where: { id } }).then(() => {
            res.status(200).send({
                message: "Delete data successfully",
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },
}