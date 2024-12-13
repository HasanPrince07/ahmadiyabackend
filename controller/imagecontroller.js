const Image = require("../model/image")
const helper = require("../helper/message")

exports.fetchImage = async (req, res) => {
    try {
        const record = await Image.findOne()
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

exports.updateImage = async (req, res) => {
    const imageOne = req.files.imageOne[0].filename
    const imageTwo = req.files.imageTwo[0].filename
    const imageThree = req.files.imageThree[0].filename
    const imageFour = req.files.imageFour[0].filename
    try {
        await Image.findOneAndUpdate({ imageOne: imageOne, imageTwo: imageTwo, imageThree: imageThree, imageFour: imageFour })
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