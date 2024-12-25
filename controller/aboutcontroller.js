const AboutT = require("../model/about");
const helper = require("../helper/message");

exports.fetchAbout = async (req, res) => {
    try {
        const record = await AboutT.findOne();
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

exports.updateAbout = async (req, res) => {
    if (req.file === undefined) {
        const { PName, PDetail, About, BColor, HColor, TColor } = req.body
        try {
            await AboutT.findOneAndUpdate({ PName: PName, PDetail: PDetail, About: About, BColor: BColor, HColor: HColor, TColor: TColor })
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
    } else {
        const Image = req.file.location
        const { PName, PDetail, About, BColor, HColor, TColor } = req.body
        try {
            await AboutT.findOneAndUpdate({ Image: Image, PName: PName, PDetail: PDetail, About: About, BColor: BColor, HColor: HColor, TColor: TColor })
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
}
