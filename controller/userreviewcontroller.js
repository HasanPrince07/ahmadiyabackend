const Userreview = require("../model/userreview")
const helper = require("../helper/message")

exports.addReview = (req, res) => {
    const { name, review } = req.body
    try {
        const record = new Userreview({ name: name, review: review })
        record.save()
        res.json({
            status: helper.status201,
            message: helper.message201,
        })
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400,
            error: error.message
        })
    }
}

exports.fetchUserReview = async (req, res) => {
    try {
        const record = await Userreview.find()
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

exports.deleteUserReview = async (req, res) => {
    const id = req.params.id
    try {
        await Userreview.findByIdAndDelete(id)
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

exports.updateUserReview = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Userreview.findById(id)
        const status = record.status
        if (status === "hide") {
            await Userreview.findByIdAndUpdate(id, { status: "show" })
        } else {
            await Userreview.findByIdAndUpdate(id, { status: "hide" })
        }
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

exports.fetchTwoReview = async (req, res) => {
    try {
        const record = await Userreview.find({ status: "show" }).limit(2)
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

exports.fetchAllReview = async (req, res) => {
    try {
        const record = await Userreview.find({ status: "show" })
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