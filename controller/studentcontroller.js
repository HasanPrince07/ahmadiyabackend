const Student = require("../model/student");
const helper = require("../helper/message");

exports.addStudents = (req, res) => {
    if (req.file === undefined) {
        const { SName, SPercentage, SClass } = req.body;
        try {
            const record = new Student({
                SName: SName,
                SPercentage: SPercentage,
                SClass: SClass,
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
        const SImage = req.file.filename;
        const { SName, SPercentage, SClass } = req.body;
        try {
            const record = new Student({
                SImage: SImage,
                SName: SName,
                SPercentage: SPercentage,
                SClass: SClass,
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

exports.fetchStudents = async (req, res) => {
    try {
        const record = await Student.find();
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

exports.deleteStudents = async (req, res) => {
    const id = req.params.id;
    try {
        await Student.findByIdAndDelete(id);
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

exports.fetchStudentsById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Student.findById(id);
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

exports.updateStudents = async (req, res) => {
    if (req.file === undefined) {
        const { SName, SPercentage, SClass } = req.body;
        const SId = req.params.id;
        try {
            await Student.findByIdAndUpdate(SId, {
                SName: SName,
                SPercentage: SPercentage,
                SClass: SClass,
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
        const SImage = req.file.filename;
        const { SName, SPercentage, SClass } = req.body;
        const SId = req.params.id;
        try {
            await Student.findByIdAndUpdate(SId, {
                SImage: SImage,
                SName: SName,
                SPercentage: SPercentage,
                SClass: SClass,
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