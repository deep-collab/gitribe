const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"abhishekkholiya15012007@gmail.com",
        pass:process.env.APP_PASSWORD
    }
})
export default function handler(req, res) {
    let subject = req.body.subject;
    let emailFrom = req.body.email;
    let body = req.body.body;
    try{
        // mg.messages.create('sandbox308148c70fab4594afe603f74592029d.mailgun.org', {
        //     from: "Excited User <abhishekkholiya15@gmail.com>",
        //     to: ["abhishekkholiya15012007@gmail.com"],
        //     subject: "Hello",
        //     text: "Testing some Mailgun awesomeness!",
        //     html: "<h1>Testing some Mailgun awesomeness!</h1>"
        // })
        // .then(msg => console.log(msg)) // logs response data
        // .catch(err => console.log(err));

        const mailOptions = {
            from:emailFrom,
            to:"abhishekkholiya15012007@gmail.com",
            subject:subject,
            text:body
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s",nodemailer.getTestMessageUrl(info));
            return res.status(200).json({message:"done"});
        })
    }catch(err){

        console.log(err);
        return res.status(500).json({error:err});
    }
}