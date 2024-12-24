const Header = require("../model/header")
const helper = require("../helper/message")

exports.fetchHeader = async (req, res) => {
    try {
        const record = await Header.findOne()
        res.json({
            status: helper.status200,
            message: helper.message200,
            data: record
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}

exports.updateHeader = async (req, res) => {
    if (req.file === undefined) {
        const { heading, headingColor, headingBColor, linksColor, linksBColor, aLinkColor, aLinkBColor } = req.body
        try {
            await Header.findOneAndUpdate({ heading: heading, headingColor: headingColor, headingBColor: headingBColor, linksColor: linksColor, linksBColor: linksBColor, aLinkColor: aLinkColor, aLinkBColor: aLinkBColor })
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
    } else {
        const logo = req.file.location
        const { heading, headingColor, headingBColor, linksColor, linksBColor, aLinkColor, aLinkBColor } = req.body
        try {
            await Header.findOneAndUpdate({ logo: logo, heading: heading, headingColor: headingColor, headingBColor: headingBColor, linksColor: linksColor, linksBColor: linksBColor, aLinkColor: aLinkColor, aLinkBColor: aLinkBColor })
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
}
