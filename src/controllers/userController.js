const { user_roles, users, statuses, profile_perusahaan } = require("../models");

const jwt = require("jsonwebtoken");

const { checkPassword, encryptedPassword, getTokenPayload } = require("../utils");

const { deleteImageOnMemory } = require("../utils/uploadOnMemory");

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
        users.findAndCountAll({
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
                count: data.count,
                data: data.rows,
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
            res.status(400).json({ message: err.original });
        }
    },

    updateUser: async (req, res) => {
        const { user, update } = req.data

        try {
            users.update(update, { where: { id: user.id } })

            res.status(200).send({ message: "Update data successfully" })

        } catch (error) {
            res.status(200).send({ message: error.original })
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
            res.status(422).send({ message: error.original })
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
                res.status(422).send({ message: error.original })
            })
    },

    createUserByAdmin: (req, res) => {
        const body = {
            ...req.user,
            created_at: new Date(),
            updated_at: new Date(),
        };

        users.create(body).then(data => {
            res.status(201).send({
                message: "Created",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    updateUserByAdmin: (req, res) => {
        const body = {
            name: req.user.name,
            email: req.user.email,
            bod: req.user.bod,
            id_user_role: req.user.id_user_role,
            status: req.user.status,
            updated_at: new Date(),
        }

        const id = req.params.id;

        users.update(body, { where: { id } }).then(() => {
            res.status(200).send({ message: "Update data successfully" });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    deleteUserByAdmin: (req, res) => {
        const id = req.params.id;

        users.update({ deleted_at: new Date(), }, { where: { id } }).then(() => {
            res.status(200).send({ message: "Delete data successfully" });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    getStatusData: (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const offset = (page - 1) * limit;

        statuses.findAndCountAll({ limit: limit, offset: offset }).then(data => {
            const totalItems = data.count;
            const totalPages = Math.ceil(totalItems / limit);

            const nextPage = page < totalPages ? page + 1 : null;
            const prevPage = page > 1 ? page - 1 : null;

            res.status(200).send({
                message: "Success",
                totalItems: totalItems,
                totalPages: totalPages,
                currentPage: page,
                nextPage: nextPage,
                prevPage: prevPage,
                data: data.rows
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        });
    },

    getDataCompany: (req, res) => {
        profile_perusahaan.findOne().then(data => {
            res.status(200).send({
                message: "Success",
                data
            });
        }).catch(error => {
            res.status(422).send({ message: error.original });
        })
    },

    createCompany: (req, res) => {
        console.log('info-file', req.file);

        const body = req.file ? {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
            image: req.file.filename,
            created_at: new Date(),
            updated_at: new Date(),
        } : {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
            created_at: new Date(),
            updated_at: new Date(),
        }

        profile_perusahaan.create(body).then(data => {
            res.status(201).send({
                message: "Created",
                data
            });
        }).catch(error => {
            if (req.file) deleteImageOnMemory(req.file.filename);
            res.status(422).send({ message: error.original });
        });
    },

    updateCompany: async (req, res) => {
        const id = req.params.id;

        const { image } = await profile_perusahaan.findByPk(id)

        const body = req.file ? {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
            image: req.file.filename,
            updated_at: new Date(),
        } : {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
            updated_at: new Date(),
        }

        if (req.file && image) deleteImageOnMemory(image);

        profile_perusahaan.update(body, { where: { id } }).then(() => {
            res.status(200).send({
                message: "Update data succesfully",
                prevImage: image,
                currentImage: req.file ? req.file.filename : "Not send image",
            })
        }).catch(error => {
            if (req.file) deleteImageOnMemory(req.file.filename);
            res.status(422).send({ message: error.original });
        });
    },
}