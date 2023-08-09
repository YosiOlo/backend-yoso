const { users } = require("../models");

const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");

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

const createToken = (payload) => {
    const expiresIn = '1d';
    return jwt.sign(payload, process.env.JWT_SECRET_KEY || "Rahasia", { expiresIn });
}

module.exports = {
    register: async (req, res) => {
        try {
            const body = req.user

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

    login: async (req, res) => {
        const user = req.user;

        const token = createToken({
            id: user.id,
            role: user.id_user_role,
            status: user.status,
        });

        res.status(200).send({ accessToken: token })
    },

    currentUser: (req, res) => {
        res.status(200).send(req.user)
    },
}