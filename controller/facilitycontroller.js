const Facility = require("../model/facility");
const helper = require("../helper/message");

exports.fetchFacility = async (req, res) => {
    try {
        const record = await Facility.findOne();
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

exports.updateFacility = async (req, res) => {
    const {
        HColor,
    } = req.body;
    try {
        await Facility.findOneAndUpdate({
            HColor: HColor,
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