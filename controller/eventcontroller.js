const Event = require("../model/event");
const helper = require("../helper/message");

exports.fetchEvent = async (req, res) => {
  try {
    const record = await Event.findOne();
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

exports.updateEvent = async (req, res) => {
  const {
    BColor,
    eventBColor,
    sHeadingColor,
    buttonColor,
    buttonBColor,
    buttonHColor,
    buttonHBColor,
    eBColor,
    eButtonHBColor,
  } = req.body;
  try {
    await Event.findOneAndUpdate({
      BColor: BColor,
      eventBColor: eventBColor,
      sHeadingColor: sHeadingColor,
      buttonColor: buttonColor,
      buttonBColor: buttonBColor,
      buttonHColor: buttonHColor,
      buttonHBColor: buttonHBColor,
      eBColor: eBColor,
      eButtonHBColor: eButtonHBColor,
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