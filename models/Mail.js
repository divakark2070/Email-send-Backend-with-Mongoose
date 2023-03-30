var nodemailer = require('nodemailer');
class Mail{
    async sendmail(to, subject, body){
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'divakarkesarkar2070@gmail.com',
                pass: 'ybtsqtgdfhuclmne'
              }
            });
            
            var mailOptions = {
              from: 'divakarkesarkar2070@gmail.com',
              to: to,
              subject: subject,
              html: body
            };
            
         await transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                return false;
              } else {
                  return true;
                  //res.end(JSON.stringify({status : "success", data:info.response}));
              }
            });
    }
}

module.exports = Mail;
