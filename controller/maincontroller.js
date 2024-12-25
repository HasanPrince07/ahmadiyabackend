const Main = require("../model/main")
const helper = require("../helper/message")

exports.check = (req,res)=>{
    try{
        res.json({
            status: helper.status200,
            message: helper.message200
        })
    }catch(error){
        res.json({
            status: helper.status500,
            error: error.message
        })
    }
}
exports.fetchMain = async (req, res) => {
    try {
        const record = await Main.findOne()
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

exports.updateMain = async (req, res) => {
    if (req.file === undefined) {
        const { sectionBColor, heading, subHeading, headingColor, button, buttonColor, buttonBColor, buttonHColor, buttonHBColor } = req.body
        try {
            await Main.findOneAndUpdate({ sectionBColor: sectionBColor, heading: heading, subHeading: subHeading, headingColor: headingColor, button: button, buttonColor: buttonColor, buttonBColor: buttonBColor, buttonHColor: buttonHColor, buttonHBColor: buttonHBColor })
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
        const image = req.file.location
        const { sectionBColor, heading, subHeading, headingColor, button, buttonColor, buttonBColor, buttonHColor, buttonHBColor } = req.body
        try {
            await Main.findOneAndUpdate({ image: image, sectionBColor: sectionBColor, heading: heading, subHeading: subHeading, headingColor: headingColor, button: button, buttonColor: buttonColor, buttonBColor: buttonBColor, buttonHColor: buttonHColor, buttonHBColor: buttonHBColor })
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
