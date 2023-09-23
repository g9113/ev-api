const { Mail, mailer } = require("./nodemailer");
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, expires: "10m", default: Date.now },
});

const OtpModel = mongoose.model("Otp", otpSchema);

const generateOtp = (email) => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};

const sendOtp = async (email) => {
  if (!email) {
    throw new Error("Email Not Provided");
  }

  const otp = generateOtp(email);

  const mail = new Mail(email, otp);

  try {
    await mailer.sendMail(mail);

    const otpRecord = new OtpModel({ email, otp });
    await otpRecord.save();

    return { status: true, message: "OTP sent successfully" };
  } catch (error) {
    throw new Error(error);
  }
};

const verifyOtp = async ({ otp, email }) => {
  if (!otp || !email) {
    throw new Error("Missing verification fields");
  }

  try {
    const otpRecord = await OtpModel.findOne({ email, otp }).exec();
    if (otpRecord) {
      return { status: true, email };
    } else {
      throw new Error("Invalid OTP");
    }
  } catch (error) {
    console.error("Error while verifying OTP:", error);
    throw new Error("Invalid OTP");
  }
};

module.exports = { sendOtp, verifyOtp };
