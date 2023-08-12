const {
    createRoleChecker, 
    loginChecker, 
    registerChecker, 
    updateUserChecker, 
    whoIsLogin, 
    createUserByAdminChecker,
} = require("./userMiddleware");

const {
    createCompanyChecker,
} = require("./customMiddleware");

module.exports = {
    loginChecker,
    registerChecker,
    updateUserChecker,
    whoIsLogin,
    createRoleChecker,
    createUserByAdminChecker,
    createCompanyChecker,

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
        const kab_Kota = req.body.kab_kota?.trim();
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