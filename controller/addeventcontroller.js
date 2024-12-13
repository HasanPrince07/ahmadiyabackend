const Events = require("../model/addevents");
const helper = require("../helper/message");

exports.addEvents = (req, res) => {
    if (req.file === undefined) {
        const { eName, eDate, eStatus, eDetail } = req.body;
        try {
            const record = new Events({
                eName: eName,
                eDate: eDate,
                eStatus: eStatus,
                eDetail: eDetail,
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
        const eImage = req.file.filename;
        const { eName, eDate, eStatus, eDetail } = req.body;
        try {
            const record = new Events({
                eImage: eImage,
                eName: eName,
                eDate: eDate,
                eStatus: eStatus,
                eDetail: eDetail,
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

exports.fetchEvents = async (req, res) => {
    try {
        const record = await Events.find();
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

exports.fetchUpcomingEvents = async (req, res) => {
    try {
        const record = await Events.find({ eStatus: "upcoming_event" });
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

exports.fetchMoreEventsById = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Events.findById(id);
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

exports.fetchThreeEvents = async (req, res) => {
    try {
        const record = await Events.find().limit(3)
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

exports.deleteEvents = async (req, res) => {
    const id = req.params.id;
    try {
        await Events.findByIdAndDelete(id);
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

exports.fetchEventsById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Events.findById(id);
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

exports.updateEvents = async (req, res) => {
    if (req.file === undefined) {
        const { eName, eDate, eStatus, eDetail } = req.body;
        const eId = req.params.id;
        try {
            await Events.findByIdAndUpdate(eId, {
                eName: eName,
                eDate: eDate,
                eStatus: eStatus,
                eDetail: eDetail,
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
        const eImage = req.file.filename;
        const { eName, eDate, eStatus, eDetail } = req.body;
        const eId = req.params.id;
        try {
            await Events.findByIdAndUpdate(eId, {
                eImage: eImage,
                eName: eName,
                eDate: eDate,
                eStatus: eStatus,
                eDetail: eDetail,
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