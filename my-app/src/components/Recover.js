import { Button, FormControl, TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUsers,
  openRegister,
  setErrorMessage,
  setName,
  setPassword,
  setRole,
  setSurname,
  setUser,
  setUserName,
  toggleOpenForm,
  updatePassword,
} from "../redux/slice";
import store from "../redux/store";
import checkRecover from "../utils/checkRecover";

export const Recover = ({otp}) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const [newPassword, setNewPassword] = useState("");
  const [otpNumber, setOtpNumber] = useState("")

  const users = useSelector((state) => state.users);
  const errorMessage = useSelector((state) => state.errorMessage);
const handleOtp = (e)=>{
  e.preventDefault()
  setOtpNumber(e.target.value)
}
  const user = useSelector((state) => state.user);

  const handleUserName = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setUserName(e.target.value));
  };

  const handlePassword = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setPassword(e.target.value));
  };

  const confirmPassword = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    setNewPassword(e.target.value);
  };

  const saveUser = (e) => {
    e.preventDefault();
    checkRecover(users, userName, newPassword, password, otp, otpNumber);
   
    dispatch(setRole(user.role));
    dispatch(addToUsers());
    dispatch(setUserName(""));
    dispatch(setPassword(""));
    dispatch(setName(""));
    dispatch(setSurname(""));
    dispatch(setUser({}));

    if (!store.getState().errorMessage) {
      dispatch(openRegister(false));
      dispatch(toggleOpenForm(false));
      //   dispatch(signIn(true));
      dispatch(toggleOpenForm(false));
      dispatch(openRegister(false));
      dispatch(updatePassword(false));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      justifySelf="center"
      alignItems="center"
      margin="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems={"center"}
        borderRadius={2}
        sx={{
          width: "40vw",
          height: "80%",
          margin: "auto",
          background: "white",
        }}
      >
        <Typography>sign up to BlueCloudai</Typography>

        <FormControl sx={{ width: "90%", p: 2 }}>
          <TextField
            label="enter user name"
            value={userName}
            onChange={handleUserName}
          ></TextField>
          <TextField
            label="enter password"
            sx={{ marginTop: 2, marginBottom: 2 }}
            value={password}
            onChange={handlePassword}
          ></TextField>
          <TextField
            label="confirm password"
            sx={{ marginTop: 2, marginBottom: 2 }}
            value={newPassword}
            onChange={confirmPassword}
          ></TextField>
              <TextField
            label="enter otp number"
            value={otpNumber}
            onChange={handleOtp}
          ></TextField>
          {errorMessage && (
            <Typography color="red" fontStyle="italic">
              {errorMessage}
            </Typography>
          )}
        </FormControl>
        <Box display="flex" justifyItems="center" p={2}>
          <Button variant="contained" onClick={saveUser}>
            recover
          </Button>
          <Box
            style={{ borderBottom: "1px solid #e0e0e0", margin: "10px 0" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
