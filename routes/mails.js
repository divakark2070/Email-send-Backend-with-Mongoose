let express = require("express");

let fs = require("fs");
let Mail = require("../models/Mail");

let router = express.Router();



router.post("/", (req, res)=>{

    let messageBody = "<h1>Welcome to Matrimony project</h1>";
    messageBody += "This is sample email.";
    let subject = "Welcome Email";
    let mail = new Mail();
    if(mail.sendmail("satherajkumar07@gmail.com", subject, messageBody)){
        res.end(JSON.stringify({status : "success"}));
    }
    else{
        res.end(JSON.stringify({status : "failed"}));
    }
   
      
});
module.exports = router;