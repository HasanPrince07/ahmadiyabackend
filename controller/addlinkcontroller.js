const Link = require("../model/link");
const helper = require("../helper/message");

exports.fetchLinks = async (req, res) => {
    try {
        const record = await Link.find();
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

exports.fetchLinksById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Link.findById(id);
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

exports.addLinks = (req, res) => {
    const { LName, LAddress } = req.body;
    try {
        const record = new Link({ LName: LName, LAddress: LAddress });
        record.save();
        res.json({
            status: helper.status201,
            message: helper.message201,
        });
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400,
            error: error.message,
        });
    }
};

exports.updateLinks = async (req, res) => {
    const { LName, LAddress } = req.body;
    const id = req.params.id;
    try {
        await Link.findByIdAndUpdate(id, { LName: LName, LAddress: LAddress });
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
};

exports.deleteLinks = async (req, res) => {
    const id = req.params.id;
    try {
        await Link.findByIdAndDelete(id);
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
};