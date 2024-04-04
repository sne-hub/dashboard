import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/slice";
import { SendEmail } from "./SendEmail";
import emailjs from "@emailjs/browser";
import otpNumber from "../utils/otpCode";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("")

  useEffect(() => {
    emailjs.init("1yG9Data4UPEBu_RX");
    setOtp(otpNumber())
  }, []);

  const dispatch = useDispatch();
  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailSent(true);
    const name= email.slice(0, email.indexOf("@"))

    const serviceId = "service_xz0gan5";
    const templateId = "template_uupfj9c";
    try {
      await emailjs.send(serviceId, templateId, {
        to_email: email ,
        from_name: "bluecloudai",
        to_name:name,
        message: ` ${otp} `,
      });
      setEmailSent(true);

      alert("email successfully sent check inbox");
    } catch (error) {
      alert("oops something went wrong please try again");
    }
  };
  const saveEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <Box >
      {!emailSent && (
        <FormControl sx={{ width: "100%" }}>
          <TextField
            label="enter email address"
            sx={{ margin: 3 }}
            onChange={saveEmail}
            value={email}
          ></TextField>
          <Button onClick={sendEmail}>submit</Button>
          <Button onClick={() => dispatch(updatePassword(false))}>
            cancel
          </Button>
        </FormControl>
      )}
      {emailSent && <SendEmail email={email} otp={otp} />}
    </Box>
  );
};

export default ForgotPassword;
