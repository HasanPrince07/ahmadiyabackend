const router = require("express").Router()
const headerC = require("../controller/headercontroller")
const mainC = require("../controller/maincontroller")
const imageC = require("../controller/imagecontroller")
const reviewC = require("../controller/reviewcontroller")
const userreviewC = require("../controller/userreviewcontroller")
const eventC = require("../controller/eventcontroller")
const addeventC = require("../controller/addeventcontroller")
const footerC = require("../controller/footercontroller")
const addlinkC = require("../controller/addlinkcontroller")
const aboutC = require("../controller/aboutcontroller");
const allimageC = require("../controller/allimagecontroller");
const teacherC = require("../controller/teachercontroller");
const resultC = require("../controller/resultcontroller");
const studentC = require("../controller/studentcontroller");
const facilityC = require("../controller/facilitycontroller");
const addfacilityC = require("../controller/addfacilitycontroller");
const historyC = require("../controller/historycontroller");
const contactC = require("../controller/contactcontroller");


router.get("/fetchHeader", headerC.fetchHeader)

router.get("/fetchMain", mainC.fetchMain)

router.get("/fetchImage", imageC.fetchImage)

router.get("/fetchReview", reviewC.fetchReview)

router.post("/addReview", userreviewC.addReview)
router.get("/fetchTwoReview", userreviewC.fetchTwoReview)
router.get("/fetchAllReview", userreviewC.fetchAllReview)

router.get("/fetchEvent", eventC.fetchEvent)

router.get("/fetchThreeEvents", addeventC.fetchThreeEvents)
router.get("/fetchEvents", addeventC.fetchEvents)
router.get("/fetchUpcomingEvents", addeventC.fetchUpcomingEvents)
router.get("/fetchMoreEventsById/:id", addeventC.fetchMoreEventsById)

router.get("/fetchFooter", footerC.fetchFooter)

router.get("/fetchLinks", addlinkC.fetchLinks)

router.get("/fetchAbout", aboutC.fetchAbout);

router.get("/fetchAImage", allimageC.fetchAImage);

router.get("/fetchTeachers", teacherC.fetchTeachers);

router.get("/fetchResult", resultC.fetchResult);

router.get("/fetchStudents", studentC.fetchStudents);

router.get("/fetchFacility", facilityC.fetchFacility);

router.get("/fetchFacilities", addfacilityC.fetchFacilities);
router.get("/fetchFacilitiesById/:id", addfacilityC.fetchFacilitiesById);

router.get("/fetchHistory", historyC.fetchHistory);

router.post("/addQuery", contactC.addQuery)

module.exports = router