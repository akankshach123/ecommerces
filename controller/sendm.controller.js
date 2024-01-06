const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Create a Nodemailer transporter object
module.exports={
  sendMail:(email,otp)=>{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akankshachaudhari736@gmail.com',
      pass: 'defr hxkq kjjb mlaw', // or use an app-specific password
    },
  });



// Define the email message
  console.log(email,otp);
  const mailOptions = {
    from: 'akankshachaudhari736@gmail.com',
    to:email ,
    subject: 'otp',
    text: 'Rtgyh'+otp,
    html:''
  };
  
  transporter.sendMail(mailOptions),(error,info)=>{
   if(error){
      console.log(error);
    }else{
      console.log('email sent:' +info.response);
    }
    }
  },
 }

