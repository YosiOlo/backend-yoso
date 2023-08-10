const { customers } = require("../models");

module.exports = {
    getDataCustomer: (req, res) => {
        customers.findAll().then(data => {
            res.status(200).send({
                message: "Success",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    create: (req, res) => {
        console.log(req.data);

        const body = {
            nama: req.data.nama,
            alamat: req.data.alamat,
            kota: req.data.kota,
            tlp: req.data.tlp,
            created_at: new Date(),
            updated_at: new Date(),
        };

        customers.create(body).then(data => {
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

        customers.update(body, { where: { id } }).then(data => {
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

        customers.update({ deleted_at: new Date() }, { where: { id } }).then(() => {
            res.status(200).send({
                message: "Delete data successfully",
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },
}