const router = require("express").Router();
const adminC = require("../controller/admincontroller");
const headerC = require("../controller/headercontroller");
const mainC = require("../controller/maincontroller");
const ImageC = require("../controller/imagecontroller");
const reviewC = require("../controller/reviewcontroller");
const userreviewC = require("../controller/userreviewcontroller");
const eventC = require("../controller/eventcontroller");
const addeventC = require("../controller/addeventcontroller");
const footerC = require("../controller/footercontroller");
const addlinkC = require("../controller/addlinkcontroller");
const aboutC = require("../controller/aboutcontroller");
const teacherC = require("../controller/teachercontroller");
const resultC = require("../controller/resultcontroller");
const studentC = require("../controller/studentcontroller");
const facilityC = require("../controller/facilitycontroller");
const addfacilityC = require("../controller/addfacilitycontroller");
const historyC = require("../controller/historycontroller");
const contactC = require("../controller/contactcontroller");
const allimageC = require("../controller/allimagecontroller");

const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: "public-read",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, `${Date.now().toString()}-${file.originalname}`);
        }
    }),
    limits: { fileSize: 1024 * 1024 * 10 }
});

const upload = multer({ storage: storage });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 10 },
// });

router.post("/login", adminC.login);
router.get("/authentication", adminC.authentication);
router.get("/fetchAdmin", adminC.fetchAdmin);
router.put("/updateAdmin", adminC.updateAdmin);
router.post("/sendEmail", adminC.sendEmail);
router.post("/resetPassword", adminC.resetPassword);

router.get("/fetchHeader", headerC.fetchHeader);
router.put("/updateHeader", upload.single("logo"), headerC.updateHeader);

router.get("/fetchMain", mainC.fetchMain);
router.put("/updateMain", upload.single("image"), mainC.updateMain);

router.get("/fetchImage", ImageC.fetchImage);
router.put(
  "/updateImage",
  upload.fields([
    { name: "imageOne", maxCount: 1 },
    { name: "imageTwo", maxCount: 2 },
    { name: "imageThree", maxCount: 3 },
    { name: "imageFour", maxCount: 4 },
  ]),
  ImageC.updateImage
);

router.get("/fetchReview", reviewC.fetchReview);
router.put("/updateReview", reviewC.updateReview);

router.get("/fetchUserReview", userreviewC.fetchUserReview);
router.delete("/deleteUserReview/:id", userreviewC.deleteUserReview);
router.put("/updateUserReview/:id", userreviewC.updateUserReview);

router.get("/fetchEvent", eventC.fetchEvent);
router.put("/updateEvent", eventC.updateEvent);

router.post("/addEvents", upload.single("eImage"), addeventC.addEvents);
router.get("/fetchEvents", addeventC.fetchEvents);
router.delete("/deleteEvents/:id", addeventC.deleteEvents);
router.get("/fetchEventsById/:id", addeventC.fetchEventsById);
router.put("/updateEvents/:id", upload.single("eImage"), addeventC.updateEvents);

router.get("/fetchFooter", footerC.fetchFooter);
router.put("/updateFooter", upload.fields([{ name: "FImage", maxCount: 1 }, { name: "CImage", maxCount: 2 },]), footerC.updateFooter);

router.get("/fetchLinks", addlinkC.fetchLinks);
router.get("/fetchLinksById/:id", addlinkC.fetchLinksById);
router.post("/addLinks", addlinkC.addLinks);
router.put("/updateLinks/:id", addlinkC.updateLinks);
router.delete("/deleteLinks/:id", addlinkC.deleteLinks);

router.get("/fetchAbout", aboutC.fetchAbout);
router.put("/updateAbout", upload.single("Image"), aboutC.updateAbout);

router.post("/addTeachers", teacherC.addTeachers);
router.get("/fetchTeachers", teacherC.fetchTeachers);
router.delete("/deleteTeachers/:id", teacherC.deleteTeachers);
router.get("/fetchTeachersById/:id", teacherC.fetchTeachersById);
router.put("/updateTeachers/:id", teacherC.updateTeachers);

router.get("/fetchResult", resultC.fetchResult);
router.put("/updateResult", resultC.updateResult);

router.post("/addStudents", upload.single("SImage"), studentC.addStudents);
router.get("/fetchStudents", studentC.fetchStudents);
router.delete("/deleteStudents/:id", studentC.deleteStudents);
router.get("/fetchStudentsById/:id", studentC.fetchStudentsById);
router.put("/updateStudents/:id", upload.single("SImage"), studentC.updateStudents);

router.get("/fetchFacility", facilityC.fetchFacility);
router.put("/updateFacility", facilityC.updateFacility);

router.post("/addFacilities", upload.single("FImage"), addfacilityC.addFacilities);
router.get("/fetchFacilities", addfacilityC.fetchFacilities);
router.delete("/deleteFacilities/:id", addfacilityC.deleteFacilities);
router.get("/fetchFacilitiesById/:id", addfacilityC.fetchFacilitiesById);
router.put("/updateFacilities/:id", upload.single("FImage"), addfacilityC.updateFacilities);

router.get("/fetchHistory", historyC.fetchHistory);
router.put("/updateHistory", historyC.updateHistory);

router.get("/fetchContact", contactC.fetchContact);
router.get("/fetchReadContact", contactC.fetchReadContact);
router.get("/fetchUnreadContact", contactC.fetchUnreadContact);
router.delete("/deleteContact/:id", contactC.deleteContact);
router.get("/fetchContactById/:id", contactC.fetchContactById);
router.post("/reply/:id", contactC.reply);

router.post("/addAImage", upload.single("AImage"), allimageC.addAImage);
router.get("/fetchAImage", allimageC.fetchAImage);
router.delete("/deleteAImage/:id", allimageC.deleteAImage);
router.get("/fetchAImageById/:id", allimageC.fetchAImageById);
router.put("/updateAImage/:id", upload.single("AImage"), allimageC.updateAImage);

module.exports = router;
