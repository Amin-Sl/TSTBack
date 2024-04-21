import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
     service: "gmail",
     auth:{
        user: "exort1398@gmail.com",
        pass: "blppwlguqtxvhoru"  
     }
})


export const sendEmailMsg = async(req,res)=>{
     const {subject, message, email} = req.body;
     const user = `شما پیامی از طرف ${email} - موضوع پیام ${subject}`
     try {
          let details = {
               from: email,
               to: "videocode2021@gmail.com",
               subject: user,
               text: message,
          }

          await transporter.sendMail(details)

          res.json("ایمیل شما ارسال شد")
          
     } catch (error) {
          res.json(error)
     }
}