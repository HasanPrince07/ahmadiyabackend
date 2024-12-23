const Admin = require("../model/admin");
const helper = require("../helper/message");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtkey = process.env.JWT_SECRECT_KEY

exports.login = async (req, res) => {
    const { username, password } = req.body
    try {
        const record = await Admin.findOne({ username: username })
        if (!record) {
            res.json({
                status: helper.status401,
                message: helper.message401
            })
        } else {
            const comparepassword = await bcrypt.compare(password, record.password)
            if (comparepassword === true) {
                jwt.sign({ id: record._id, username: record.username }, jwtkey, { expiresIn: "2h" }, (error, token) => {
                    if (error) {
                        res.json({
                            status: helper.status500,
                            message: helper.message500,
                            error: error.message
                        })
                    } else {
                        res.json({
                            status: helper.status200,
                            message: helper.message200,
                            username: record.username,
                            token: token
                        })
                    }
                })
            } else {
                res.json({
                    status: helper.status401,
                    message: helper.message401
                })
            }
        }
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.authentication = (req, res) => {
    const token = req.headers.authorization
    const newToken = token.split(' ')[1]
    try {
        if (newToken === "null") {
            res.json({
                status: helper.status401,
                message: helper.message401,
            })
        } else {
            jwt.verify(newToken, jwtkey, (error, valid) => {
                if (error) {
                    res.json({
                        status: helper.status401,
                        message: helper.message401,
                        error: error.message
                    })
                } else {
                    res.json({
                        status: helper.status200,
                        message: helper.message200,
                    })
                }
            })
        }
    } catch {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.fetchAdmin = async (req, res) => {
    try {
        const record = await Admin.findOne()
        res.json({
            status: helper.status200,
            message: helper.message200,
            data: record,
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.updateAdmin = async (req, res) => {
    const { username, password, email } = req.body
    try {
        const newpassword = await bcrypt.hash(password, 10)
        await Admin.findOneAndUpdate({ username: username, password: newpassword, email: email })
        res.json({
            status: helper.status200,
            message: helper.message200,
            username: username
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.sendEmail = async (req, res) => {
    const { email } = req.body
    try {
        const record = await Admin.findOne()
        const AEmail = record.email
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: AEmail,
                pass: "hsbu qqbn mebd artr",
            },
        });
        const info = await transporter.sendMail({
            from: AEmail,
            to: email,
            subject: "Forgot password link",
            text: "body",
            html: `<a href="https://ahmadiyamadarsa.com/forgotlink/${email}">click here to change password</a>`
        });
        res.json({
            status: helper.status200,
            message: helper.message200,
            email: email
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.resetPassword = async (req, res) => {
    const { password, repassword } = req.body
    try {
        if (password === repassword) {
            const newpassword = await bcrypt.hash(password, 10)
            await Admin.findOneAndUpdate({ password: newpassword })
            res.json({
                status: helper.status200,
                message: helper.message200,
            })
        } else {
            res.json({
                status: helper.status400,
                message: helper.message400,
            })
        }
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}
