const { users, user_roles } = require("../models");

const jwt = require("jsonwebtoken");

const { checkPassword, encryptedPassword } = require("../utils")

module.exports = {
    registerChecker: async (req, res, next) => {
        const name = req.body.name?.trim();
        const email = req.body.email?.toLowerCase().trim();
        const role = req.body.role?.toUpperCase().trim();
        const password = req.body.password?.trim();

        if (!name) return res.status(400).send({ message: "Error: field name cannot empty" });

        if (!email) return res.status(400).send({ message: "Error: field email cannot empty" });

        if (!email.includes('@')) return res.status(400).send({ message: "Error: invalid email format" });

        if (!role) return res.status(400).send({ message: "Error: field role cannot empty" });

        if (!password) return res.status(400).send({ message: "Error: field password cannot empty" });

        const isEmailExist = await users.findOne({
            where: { email: email, status: 2 }
        })

        if (isEmailExist) return res.status(400).send({ message: "Error: email already used" });

        const encryptedPass = await encryptedPassword(password);

        const findRoles = await user_roles.findOne({
            where: { name: role }
        })

        if (!findRoles) return res.status(404).send({ message: "Error: role not found" });

        req.user = {
            ...req.body,
            password: encryptedPass,
            id_user_role: findRoles.id
        }

        next();
    },

    loginChecker: async (req, res, next) => {
        const email = req.body.email?.toLowerCase().trim();
        const password = req.body.password?.trim();

        if (!email) return res.status(400).send({ message: "Error: field email cannot empty" });

        if (!email.includes('@')) return res.status(400).send({ message: "Error: invalid email format" });

        if (!password) return res.status(400).send({ message: "Error: field password cannot empty" });

        const user = await users.findOne({ where: { email: email } });

        if (!user) return res.status(404).send({ message: "Error: email does not match any user" });

        if (user.deleted_at) return res.status(404).send({ message: "Error: this account has been deleted" });

        if (user.status === 2) return res.status(400).send({ message: "Error: this account has not been activated" })

        const comparePassword = await checkPassword(user.password, password);

        if (!comparePassword) return res.status(400).send({ message: "Error: password incorrect" });

        req.user = user;

        next();
    },

    updateUserChecker: async (req, res, next) => {
        const name = req.body.name?.trim();
        const email = req.body.email?.toLowerCase().trim();

        if (!name) return res.status(400).send({ message: "Error: field name cannot empty" });

        if (!email) return res.status(400).send({ message: "Error: field email cannot empty" });

        if (!email.includes('@')) return res.status(400).send({ message: "Error: invalid email format" });

        req.data = {
            user: req.user.dataValues,
            update: { name: name, email: email },
        }

        next();
    },

    whoIsLogin: async (req, res, next) => {
        try {
            const bearerToken = req.headers.authorization;

            const token = bearerToken.split(" ")[1];

            const payload = jwt.verify(
                token,
                process.env.JWT_SECRET_KEY || "Rahasia",
            );

            req.user = await users.findByPk(payload.id);

            if (!req.user) throw new Error("This account does not exists in database");

            next();

        } catch (err) {
            res.status(401).send({ message: req.user ? err : err.message });
        }
    },

    createCustomerChecker: (req, res, next) => {
        const nama = req.body.nama?.toUpperCase().trim();
        const alamat = req.body.alamat?.trim();
        const kota = req.body.kota?.trim();
        const tlp = req.body.tlp?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        if (!alamat) return res.status(400).send({ message: "Error: field alamat cannot empty" });

        if (!kota) return res.status(400).send({ message: "Error: field kota cannot empty" });

        if (!tlp) return res.status(400).send({ message: "Error: field tlp cannot empty" });

        req.data = {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
        }

        next();
    },

    createSubcontChecker: (req, res, next) => {
        const nama = req.body.nama?.toUpperCase().trim();
        const alamat = req.body.alamat?.trim();
        const kab_Kota = req.body.kab_Kota?.trim();
        const telp = req.body.telp?.trim();
        const fax = req.body.fax?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        if (!alamat) return res.status(400).send({ message: "Error: field alamat cannot empty" });

        if (!kab_Kota) return res.status(400).send({ message: "Error: field kab_Kota cannot empty" });

        if (!telp) return res.status(400).send({ message: "Error: field telp cannot empty" });

        if (!fax) return res.status(400).send({ message: "Error: field fax cannot empty" });

        req.data = {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
        }

        next();
    },

    createSuplierChecker: (req, res, next) => {
        const nama = req.body.nama?.toUpperCase().trim();
        const alamat = req.body.alamat?.trim();
        const kontak = req.body.kontak?.trim();
        const fax = req.body.fax?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        if (!alamat) return res.status(400).send({ message: "Error: field alamat cannot empty" });

        if (!kontak) return res.status(400).send({ message: "Error: field kontak cannot empty" });

        if (!fax) return res.status(400).send({ message: "Error: field fax cannot empty" });

        req.data = {
            ...req.body,
            nama: req.body.nama.toUpperCase(),
        }

        next();
    },
}