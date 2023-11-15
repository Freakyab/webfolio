const express = require("express");
const router = express.Router();
const UserMessage = require("../models/userMessage.model");
const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Thanks for feedback",
      html: `
      <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 15px 0;
        }
        .content {
            padding: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            background-color: #f4f4f4;
        }
    </style>
      <div class="container">
      <div class="header">
          <h1>Thank You for Your Feedback!</h1>
      </div>
      <div class="content">
          <p>Dear ${name},</p>

          <p>Thank you so much for taking the time to provide feedback! Your insights are incredibly valuable and will help me improve and grow. I appreciate your thoughtful comments and suggestions.</p>

          <p>As I continue to enhance my work, I will keep your feedback in mind. I am excited to share that there are some exciting updates and projects in the pipeline, and I would love to keep you in the loop.</p>

          <p>Stay tuned for future updates! If you have any further questions or thoughts, feel free to reach out. Your support means a lot to me.</p>

          <p>Best regards,</p>
          <p>Aryan Vijay Bhisikar<br>
          ${process.env.MAIL_USERNAME}<br>
      </div>`,
    };
    const userMessage = new UserMessage({
      name,
      email,
      message,
    });
    await userMessage.save().then(
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
            res
                .status(500)
                .json({ isSuccess: false, message: "Internal Server Error" });
        } else {
            res.status(200).json({ isSuccess: true, message: "Message Sent" });
        }
      })
    );
  } catch (error) {
    res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
});

module.exports = router;
