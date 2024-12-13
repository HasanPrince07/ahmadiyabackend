const Contact = require("../model/contact")
const helper = require("../helper/message")
const nodemailer = require("nodemailer")

exports.addQuery = (req, res) => {
    const { UFName, ULName, UEmail, UPhone, UQuery } = req.body
    try {
        const record = new Contact({ UFName: UFName, ULName: ULName, UEmail: UEmail, UPhone: UPhone, UQuery: UQuery })
        record.save()
        res.json({
            status: helper.status201,
            message: helper.message201,
        })
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400,
            error: error.message
        })
    }
}

exports.fetchContact = async (req, res) => {
    try {
        const record = await Contact.find()
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

exports.fetchReadContact = async (req, res) => {
    try {
        const record = await Contact.find({ UStatus: "read" })
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

exports.fetchUnreadContact = async (req, res) => {
    try {
        const record = await Contact.find({ UStatus: "unread" })
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

exports.deleteContact = async (req, res) => {
    const id = req.params.id
    try {
        await Contact.findByIdAndDelete(id)
        res.json({
            status: helper.status200,
            message: helper.message200
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.fetchContactById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Contact.findById(id);
        res.json({
            status: helper.status200,
            message: helper.message200,
            data: record,
        });
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message,
        });
    }
};

exports.reply = async (req, res) => {
    const { UEmail, AEmail, USubject, UReply } = req.body
    const id = req.params.id
    try {
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
            to: UEmail,
            subject: USubject,
            text: UReply,
        });
        await Contact.findByIdAndUpdate(id, { UStatus: "read" })
        res.json({
            status: helper.status200,
            message: helper.message200,
        });
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message,
        });
    }
}