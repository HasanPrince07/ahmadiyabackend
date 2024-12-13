const Result = require("../model/result");
const helper = require("../helper/message");

exports.fetchResult = async (req, res) => {
    try {
        const record = await Result.findOne();
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

exports.updateResult = async (req, res) => {
    const { BColor } = req.body;
    try {
        await Result.findOneAndUpdate({ BColor: BColor });
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