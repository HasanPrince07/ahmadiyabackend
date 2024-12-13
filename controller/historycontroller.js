const History = require("../model/history");
const helper = require("../helper/message");

exports.fetchHistory = async (req, res) => {
    try {
        const record = await History.findOne();
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

exports.updateHistory = async (req, res) => {
    const { HText } = req.body;
    try {
        await History.findOneAndUpdate({
            HText: HText,
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