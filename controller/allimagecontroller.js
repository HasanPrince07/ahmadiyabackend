const Allimage = require("../model/allimage");
const helper = require("../helper/message");

exports.addAImage = (req, res) => {
    const AImage = req.file.filename;
    try {
        const record = new Allimage({
            AImage: AImage,
        });
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
    };
};

exports.fetchAImage = async (req, res) => {
    try {
        const record = await Allimage.find();
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

exports.deleteAImage = async (req, res) => {
    const id = req.params.id;
    try {
        await Allimage.findByIdAndDelete(id);
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

exports.fetchAImageById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Allimage.findById(id);
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

exports.updateAImage = async (req, res) => {
    const AImage = req.file.filename;
    const AId = req.params.id;
    try {
        await Allimage.findByIdAndUpdate(AId, {
            AImage: AImage,
        });
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