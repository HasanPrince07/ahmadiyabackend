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

const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});

router.get("/fetchHeader", headerC.fetchHeader)

router.get("/check", mainC.check)
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
