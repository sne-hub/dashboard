import {
  Button,
  FormControl,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openRegister,
  setErrorMessage,
  setPassword,
  setUserName,
  signIn,
  toggleOpenForm,
  updatePassword,
} from "../redux/slice";

import checkMatch from "../utils/checkMatch";
import ForgotPassword from "./ForgotPassword";
import store from "../redux/store";
import { Register } from "./Register";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

export const Form = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const users = useSelector((state) => state.users);
  const errorMessage = useSelector((state) => state.errorMessage);
  const forgotPassword = useSelector((state) => state.forgotPassword);
  const registerOpen = useSelector((state) => state.registerOpen);

  const handleUserName = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setUserName(e.target.value));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    dispatch(updatePassword(true));
  };

  const handlePassword = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setPassword(e.target.value));
  };

  const saveUser = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(openRegister(true));
  };

  const logIn = (e) => {
    e.preventDefault();
    checkMatch(users, userName, password);
    if (!store.getState().errorMessage) {
      dispatch(setUserName(""));
      dispatch(setPassword(""));
      dispatch(signIn(true));
      dispatch(toggleOpenForm(false));
    }
  };

  const closeForms = (e) => {
    e.preventDefault();
    dispatch(toggleOpenForm(false));
    dispatch(openRegister(false));
    dispatch(updatePassword(false));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      justifySelf="center"
      alignItems="center"
      marginTop="10%"
      boxShadow={2}
      width="45vw"
    >
      <Box display="flex" padding={1} marginLeft="93%">
        <CloseOutlined onClick={closeForms} sx={{ cursor: "pointer" }} />
      </Box>
      <Typography variant="h2" fontWeight="bold" color="#008080">
        BlueCloudai
      </Typography>

      {forgotPassword && <ForgotPassword />}
      {registerOpen && !forgotPassword && <Register />}

      {!forgotPassword && !registerOpen && (
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
          <Typography>Log in</Typography>

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
            {errorMessage && (
              <Typography color="red" fontStyle="italic">
                {errorMessage}
              </Typography>
            )}

            <Button
              variant="button"
              color="blue"
              sx={{ cursor: "pointer" }}
              onClick={handleForgotPassword}
            >
              Forgot password?
            </Button>
            <Button
              variant="contained"
              sx={{ marginTop: 2, marginBottom: 2 }}
              onClick={logIn}
            >
              {" "}
              login
            </Button>
          </FormControl>
          <Box display="flex" justifyItems="center" p={2}>
            <Typography>New to blueCloudai?</Typography>
            <Button onClick={saveUser}>sign up</Button>
            <Box
              style={{ borderBottom: "1px solid #e0e0e0", margin: "10px 0" }}
            ></Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
