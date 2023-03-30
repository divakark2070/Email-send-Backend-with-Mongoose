let express = require("express");
//  let Gmail = require("../models/Gmail");
 var nodemailer = require('nodemailer');
let router = express.Router();

router.post("/", (req, res) => {
    // console.log("ok");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'divakarkesarkar2070@gmail.com',
            pass: 'ybtsqtgdfhuclmne'
        }
    });
    // res.end("post")

    var mailOptions = {
        from: 'divakarkesarkar2070@gmail.com',
        to: ['jaydipkhade9252@gmail.com','viveksutar26@gmail.com'],
        subject: 'Welcom to Matrimony',
        text: 'Are you Interested to Marry!'
    };

    transporter.sendMail(mailOptions, function (error,info) {
        if (error) {
            res.end(JSON.stringify({ status: "error" , data:error}));
        }
        else {
            res.end(JSON.stringify({ status: "success", data:info.response }));
        }
    });
});

module.exports = router;