const Teacher = require("../model/teacher")
const helper = require("../helper/message")

exports.addTeachers = (req, res) => {
    const { TName, TSubject, TDetail } = req.body
    try {
        const record = new Teacher({ TName: TName, TSubject: TSubject, TDetail: TDetail })
        record.save()
        res.json({
            status: helper.status201,
            message: helper.message201,
        })
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400,
            error: error.message,
        });
    }
}

exports.fetchTeachers = async (req, res) => {
    try {
        const record = await Teacher.find();
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

exports.deleteTeachers = async (req, res) => {
    const id = req.params.id;
    try {
        await Teacher.findByIdAndDelete(id);
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

exports.fetchTeachersById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Teacher.findById(id);
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

exports.updateTeachers = async (req, res) => {
    const { TName, TSubject, TDetail } = req.body;
    const id = req.params.id;
    try {
        await Teacher.findByIdAndUpdate(id, {
            TName: TName,
            TSubject: TSubject,
            TDetail: TDetail
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
};