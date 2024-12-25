const Facilities = require("../model/addfacility");
const helper = require("../helper/message");

exports.addFacilities = (req, res) => {
    if (req.file === undefined) {
        const { FName, FDetail } = req.body;
        try {
            const record = new Facilities({
                FName: FName,
                FDetail: FDetail,
            });
            record.save();
            res.json({
                status: helper.status201,
                message: helper.message201,
            });
        } catch (error) {
            res.json({
                status: helper.status400,
                message: helper.message400,
                error: error.message,
            });
        }
    } else {
        const FImage = req.file.location;
        const { FName, FDetail } = req.body;
        try {
            const record = new Facilities({
                FImage: FImage,
                FName: FName,
                FDetail: FDetail,
            });
            record.save();
            res.json({
                status: helper.status201,
                message: helper.message201,
            });
        } catch (error) {
            res.json({
                status: helper.status400,
                message: helper.message400,
                error: error.message,
            });
        }
    }
};

exports.fetchFacilities = async (req, res) => {
    try {
        const record = await Facilities.find();
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

exports.deleteFacilities = async (req, res) => {
    const id = req.params.id;
    try {
        await Facilities.findByIdAndDelete(id);
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

exports.fetchFacilitiesById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Facilities.findById(id);
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

exports.updateFacilities = async (req, res) => {
    if (req.file === undefined) {
        const { FName, FDetail } = req.body;
        const FId = req.params.id;
        try {
            await Facilities.findByIdAndUpdate(FId, {
                FName: FName,
                FDetail: FDetail,
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
    } else {
        const FImage = req.file.location;
        const { FName, FDetail } = req.body;
        const FId = req.params.id;
        try {
            await Facilities.findByIdAndUpdate(FId, {
                FImage: FImage,
                FName: FName,
                FDetail: FDetail,
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
    }
};
