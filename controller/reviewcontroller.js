const Review = require("../model/review")
const helper = require("../helper/message")

exports.fetchReview = async (req, res) => {
    try {
        const record = await Review.findOne()
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

exports.updateReview = async (req, res) => {
    const { BColor, headingColor, headingBColor, buttonColor, buttonBColor, buttonHColor, buttonHBColor, aButtonColor, aButtonBColor, aButtonHColor, aButtonHBColor } = req.body
    try {
        await Review.findOneAndUpdate({ BColor: BColor, headingColor: headingColor, headingBColor: headingBColor, buttonColor: buttonColor, buttonBColor: buttonBColor, buttonHColor: buttonHColor, buttonHBColor: buttonHBColor, aButtonColor: aButtonColor, aButtonBColor: aButtonBColor, aButtonHColor: aButtonHColor, aButtonHBColor: aButtonHBColor })
        res.json({
            status: helper.status200,
            message: helper.message200,
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
            error: error.message
        })
    }
}