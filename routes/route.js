require("path");
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../models/user");
const date = new Date();

router.get("/", async (req, res) => {
    let user = await User.find({}, {
        '_id': 0
    }).sort({
        $natural: -1
    });
    res.render('index', {
        user
    });
});
router.get("/index", async (req, res) => {
    let user = await User.find({}, {
        '_id': 0
    }).sort({
        $natural: -1
    });
    res.render('index', {
        user
    });
});

router.get("/form", (req, res) => {
    res.render('form');
});

const cpUpload = upload.fields([{
    name: 'modelimg'
}, {
    name: 'modelfile'
}]);

router.post("/conn", cpUpload, async (req, res) => {
    try {
        const result1 = await cloudinary.uploader.upload(req.files['modelimg'][0].path, {
            folder: 'Design Images',
            use_filename: true
        });
        const result2 = await cloudinary.uploader.upload(req.files['modelfile'][0].path, {
            folder: 'Design Pdf',
            use_filename: true
        });
        let user = new User({
            buildtype: req.body.buildtype,
            sitelocation: req.body.sitelocation,
            sitearea: req.body.sitearea,
            modelimg: result1.secure_url,
            modelfile: result2.secure_url,
            cloudinary_id1: result1.public_id,
            cloudinary_id2: result2.public_id,
            description: req.body.description,
            timestamp: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
        });
        await user.save();
        res.status(201).redirect("index");
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;