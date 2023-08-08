const { user_roles, users } = require("../models");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");

const encryptedPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, encrypted) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(encrypted);
        })
    })
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "yusron.arly@gmail.com",
        pass: "nbmhvzewnfdaohji",
    },
});

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

    getAllUser: (req, res) => {
        users.findAll({
            include: [
                {
                    model: user_roles,
                    as: 'user_role',
                    attributes: ['code', 'name']
                }
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

    whoIsLogin: async (req, res, next) => {
        try {
            const bearerToken = req.headers.authorization;

            const token = bearerToken.split(" ")[1];

            const payload = jwt.verify(
                token,
                process.env.JWT_SECRET_KEY || "Rahasia",
            );

            req.user = await users.findByPk(payload.id);

            next();

        } catch (err) {
            res.status(401).send({
                message: "Unauthorized",
                errors: err
            })
        }
    },

    currentUser: (req, res) => {
        res.status(200).send(req.user)
    },

    register: async (req, res) => {
        try {
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

            const body = {
                ...req.body,
                password: encryptedPass,
                id_user_role: findRoles.id
            }

            const createUser = await users.create(body)

            jwt.sign(
                { id: createUser.dataValues.id },
                process.env.JWT_SIGNATURE_KEY || "Rahasia",
                async (err, emailToken) => {
                    if (err) {
                        console.log("ErrorJWT:", err.message);
                        return;
                    }

                    const url = `http://localhost:8080/api/user/register-verify/${emailToken}`;

                    transporter.sendMail({
                        from: "Yoso Mekatama",
                        to: email,
                        subject: "Activated Account",
                        html: `
                          <table width="100%" style="width: 100%">
                              <tbody>
                              <tr>
                                  <td align="center">
                                  <img src="https://res.cloudinary.com/dptgh7efj/image/upload/v1691487678/samples/hkpggsmxg5flnucw9dp0.png" width="100px" style="margin: 40px" />
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                  <table width="570" align="center">
                                      <tbody>
                                      <tr>
                                          <td>
                                              <b style="font-size: 22px; color: black;">Hi ${name},</b>
                                              <p style="font-size: 16px; color: black; margin-bottom: 30px">Your registration is successfully, now you must verify account to activate this account. Please click button bellow to verify your account.</p>
                                              <a href="${url}" style="font-size: 16px; background-color: #483dff; border-radius: 10px; text-decoration: none; color: white; padding: 10px; cursor: pointer; margin-top: 30px;">Verify Account</a>
                                              <p style="font-size: 16px; color: black; margin-top: 30px">Thanks for your confirmation, now you can login using this email.</p>
                                              <p style="font-size: 16px; color: black; margin-top: 50px">Regards,</p>
                                              <p style="font-size: 16px; color: black;">Yoso Mekatama Team</p>
                                          </td>
                                      </tr>
                                      </tbody>
                                  </table>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                          `,
                    });
                }
            );

            res.status(200).json({
                status: "Created",
                data: `Please check inbox on ${email} to activate your account`,
            });

        } catch (err) {
            res.status(422).send({ message: "Fail while running process" })
        }
    },

    verifyAccount: async (req, res) => {
        try {
            const user = jwt.verify(
                req.params.token,
                process.env.JWT_SIGNATURE_KEY || "Rahasia"
            );

            const id = user.id;

            await users.update({ status: 1 }, { where: { id } });

            res.status(200).render("response", {
                message: "Yeay... your account has been actived",
                color: "#2F82FF",
            });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updateUser: (req, res) => { },

    deleteUser: (req, res) => { },
}