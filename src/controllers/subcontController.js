const { subcont } = require("../models");

module.exports = {
    getDataSubcont: (req, res) => {
        subcont.findAll().then(data => {
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
            kab_Kota: req.data.kab_Kota,
            telp: req.data.telp,
            fax: req.data.fax,
            created_at: new Date(),
            updated_at: new Date(),
        };

        subcont.create(body).then(data => {
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
        console.log(`u-info:${body}`);

        const id = req.params.id

        subcont.update(body, { where: { id } }).then(data => {
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

        subcont.update({ deleted_at: new Date() }, { where: { id } }).then(data => {
            res.status(200).send({
                message: "Delete data successfully",
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },
}