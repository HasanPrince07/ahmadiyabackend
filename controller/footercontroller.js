const Footer = require("../model/footer");
const helper = require("../helper/message");

exports.fetchFooter = async (req, res) => {
    try {
        const record = await Footer.findOne();
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

exports.updateFooter = async (req, res) => {
    const FImage = req.files.FImage[0].location
    const CImage = req.files.CImage[0].location
    const { Heading, BColor, HColor, TColor, Address, Email, Phone, MAddress } = req.body
    try {
        await Footer.findOneAndUpdate({ FImage: FImage, CImage: CImage, Heading: Heading, BColor: BColor, HColor: HColor, TColor: TColor, Address: Address, Email: Email, Phone: Phone, MAddress: MAddress })
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
