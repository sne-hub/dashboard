import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import {Recover} from "./Recover";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

export const SendEmail = ({ email ,otp}) => {
  const [recoverEmail, setRecoverEmail] = useState(false)
  const recover =(e)=>{
    e.preventDefault()
    setRecoverEmail(true)
  }
  return (
    <Box>

    {recoverEmail && <Recover email={email} otp={otp}/>}
    {!recoverEmail &&
    <Box
      display="flex"
      flexDirection="column"
      width="40vw"
      alignItems="center"
      justifyContent="center"
      height="40vh"
    >
      <Typography>email sent to </Typography>

      <IconButton>
        <Typography color="blue">{email}</Typography>
      </IconButton>

      <Typography>please check your mails for the login code</Typography>
      <IconButton onClick={recover}>
        <Typography color="blue">next step</Typography>
        <KeyboardTabIcon margin={2} />
      </IconButton>
    </Box>}
    </Box>

  );
};
