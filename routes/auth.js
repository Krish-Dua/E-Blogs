const { Router } = require("express");
const router = Router();
const User = require("../modals/User.modal.js");
const bcrypt = require("bcrypt");
const multer  = require('multer');
const { genToken, verifyToken } = require("../services/token.js");
const {uploadonCloudinary}  = require('../services/cloudinary_upload.js')
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/profileImages')
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`
    cb(null,filename)
  }
})

const upload = multer({ storage: storage })


router.get("/login", (req, res) => {
  res.render("login",{
    user:req.user
  });
});

router.get("/signup", (req, res) => {
  res.render("signup",{
    user:req.user
  });
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

router.post("/signup",upload.single("profileImage") ,async (req, res) => {
  let profileImage
  const { username, email, password } = req.body;
  try {
    if (req.file) {
      const result = await uploadonCloudinary(req.file.path);
      profileImage = result.url;
      fs.unlinkSync(req.file.path);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      profileImage,
      username,
      email,
      password: hashedPassword,
    });
    const token = genToken(user);
    res
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
      })
      .redirect("/");
  } catch (error) {
    console.log(error);
  }
});
     


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.render("login", { message: "User not found" });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.render("login", { message: "invalid password" });
    }
    const token = genToken(user);
    res
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
      })
      .redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
