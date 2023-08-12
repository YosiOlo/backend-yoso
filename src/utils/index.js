const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

module.exports = {
    checkPassword: (passwordFromDB, passwordFromBody) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(passwordFromBody, passwordFromDB, (err, isCorrect) => {
                if (!!err) {
                    reject(err);
                    return
                }

                resolve(isCorrect);
            })
        })
    },

    encryptedPassword: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, encrypted) => {
                if (!!err) {
                    reject(err);
                    return;
                }

                resolve(encrypted);
            })
        })
    },

    getTokenPayload: (headers) => {
        const bearerToken = headers;

        const token = bearerToken.split(" ")[1];

        return payload = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY || "Rahasia",
        );
    },
}