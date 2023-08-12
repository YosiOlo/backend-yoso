const multer = require("multer")
const path = require("path")
const fs = require("fs");

const publicDirectory = path.join(__dirname, "../../public")
const uploadDirectory = path.join(publicDirectory, "uploads")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory)
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new multer.MulterError("Invalid file type. Only image files are allowed."));
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB size limit
    },
    fileFilter: fileFilter,
});

module.exports = {
    upload,

    multerErrorHandle: (err, req, res, next) => {
        if (err instanceof multer.MulterError) {
            res.status(400).json({ error: err.code });
        } else {
            next(err);
        }
    },

    updateImage: (req, res, next) => {

        if(req.file) {
            const imagePath = path.join(publicDirectory, "uploads", req.file.filename);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

    },

    deleteImageOnMemory: (currentUrl) => {
        const imagePath = path.join(publicDirectory, "uploads", currentUrl);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
};