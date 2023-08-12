module.exports = {
    createCompanyChecker: (req, res, next) => {
        const nama = req.body.nama?.trim();
        const alamat = req.body.alamat?.trim();
        const kab_kota = req.body.kab_kota?.trim();
        const telp = req.body.telp?.trim();
        const fax = req.body.fax?.trim();

        if (!nama) return res.status(400).send({ message: "Error: field nama cannot empty" });

        if (!alamat) return res.status(400).send({ message: "Error: field alamat cannot empty" });

        if (!kab_kota) return res.status(400).send({ message: "Error: field kab_kota cannot empty" });

        if (!telp) return res.status(400).send({ message: "Error: field telp cannot empty" });

        if (!fax) return res.status(400).send({ message: "Error: field fax cannot empty" });
        
        next();
    },
}