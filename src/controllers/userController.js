const { user_roles, users, statuses } = require("../models");

const jwt = require("jsonwebtoken");

const { checkPassword, encryptedPassword, getTokenPayload } = require("../utils");

module.exports = {
    getAllUserRoles: (req, res) => {
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
    },

    createRole: (req, res) => {
        const body = {
            name: req.data.name,
            code: req.data.code,
            description: req.data.description,
            module_access: req.data.module_access,
            created_at: new Date(),
            updated_at: new Date(),
        };

        user_roles.create(body).then(data => {
            res.status(201).send({
                message: "Created",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    updateRole: (req, res) => {
        const body = {
            name: req.data.name,
            code: req.data.code,
            description: req.data.description,
            module_access: req.data.module_access,
            updated_at: new Date(),
        };

        const id = req.params.id;

        user_roles.update(body, { where: { id } }).then(() => {
            res.status(200).send({
                message: "Update data successfully"
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    deleteRole: (req, res) => {
        const id = req.params.id;

        user_roles.update({ deleted_at: new Date() }, { where: { id } }).then(() => {
            res.status(200).send({
                message: "Delete data successfully"
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    getAllUser: (req, res) => {
        users.findAll({
            include: [
                {
                    model: user_roles,
                    as: 'user_role',
                    attributes: ['code', 'name']
                },
                {
                    model: statuses,
                    as: 'user_status',
                    attributes: ['name']
                },
            ]
        }).then(data => {
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
    },

    verifyAccount: async (req, res) => {
        try {
            const user = jwt.verify(
                req.params.token,
                process.env.JWT_SIGNATURE_KEY || "Rahasia"
            );

            const id = user.id;
            const { status } = await users.findByPk(id);

            if (status === 1) {
                res.status(422).render("response", {
                    message: "This account has been activated",
                    color: "#dc3545",
                })

                return
            }

            await users.update({ email_verified_at: new Date(), status: 1 }, { where: { id } });

            res.status(200).render("response", {
                message: "Your account has been successfully activated",
                color: "#198754",
            });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updateUser: async (req, res) => {
        const { user, update } = req.data

        try {
            users.update(update, { where: { id: user.id } })

            res.status(200).send({ message: "Update data successfully" })

        } catch (error) {
            res.status(200).send({ error })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const payload = getTokenPayload(req.headers.authorization);

            const user = await users.findByPk(payload.id);

            users.update({ deleted_at: new Date(), status: 2 }, { where: { id: user.id } })
                .then(() => {
                    res.status(200).send({ message: `Delete account with id: ${user.id} successfully` })
                }).catch(error => {
                    res.status(422).send({ error })
                })

        } catch (error) {
            res.status(422).send({ error })
        }
    },

    checkPassword: async (req, res) => {
        const password = req.body.password?.trim();

        if (!password) return res.status(400).send({ message: "Error: field password cannot empty" });

        const payload = getTokenPayload(req.headers.authorization);

        const user = await users.findByPk(payload.id);

        const comparePassword = await checkPassword(user.password, password);

        if (!comparePassword) return res.status(400).send({ message: "Error: password incorrect" });

        res.status(200).send({ message: "password correct" })
    },

    resetPassword: async (req, res) => {
        const password = req.body.password?.trim();

        if (!password) return res.status(400).send({ message: "Error: field password cannot empty" });

        const encryptedPass = await encryptedPassword(password);

        const payload = getTokenPayload(req.headers.authorization);

        const user = await users.findByPk(payload.id);

        users.update({ deleted_at: new Date(), password: encryptedPass }, { where: { id: user.id } })
            .then(() => {
                res.status(200).send({ message: "Update password successfully" })
            }).catch(error => {
                res.status(422).send({ error })
            })
    },
}