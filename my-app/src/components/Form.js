import {
  Button,
  FormControl,
  TextField,
  Box,
  Typography,
  D,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUsers,
  setErrorMessage,
  setPassword,
  setUser,
  setUserName,
  toggleOpenForm,
  updatePassword,
} from "../redux/slice";
import checkLogIn from "../utils/checkDetails";
import checkRegister from "../utils/checkRegister";
import checkMatch from "../utils/checkMatch";
import ForgotPassword from "./ForgotPassword";

export const Form = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const users = useSelector((state) => state.users);
  const errorMessage = useSelector((state) => state.errorMessage);
  const forgotPassword = useSelector((state) => state.forgotPassword);

  const handleUserName = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setUserName(e.target.value));
  };
const handleForgotPassword =()=>{
  console.log("here");
  dispatch(updatePassword())
}
  const handlePassword = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setPassword(e.target.value));
  };

  const saveUser = (e) => {
    e.preventDefault();
    checkRegister(users, userName);
    dispatch(setUser({ userName, password }));
    dispatch(addToUsers());
    dispatch(setUserName(""));
    dispatch(setPassword(""));
    dispatch(setUser({}));
    // if (!errorMessage) dispatch(toggleOpenForm());
  };

  const logIn = (e) => {
    e.preventDefault();
    checkMatch(users, userName, password);
    checkLogIn(users, userName);
    dispatch(setUser({ userName, password }));
    dispatch(addToUsers());
    dispatch(setUserName(""));
    dispatch(setPassword(""));
    dispatch(setUser({}));
    // if (!errorMessage) dispatch(toggleOpenForm());
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      justifySelf="center"
      alignItems="center"
      margin="25%"
      boxShadow={2}

    >
      <Typography
        variant="h2"
        fontWeight="bold"
        color="#008080
"
      >
        BlueCloudai
      </Typography>
      {forgotPassword && <ForgotPassword />}

      {!forgotPassword && (
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

            <Button variant="button" color="blue" sx={{ cursor: "pointer" }} onClick={handleForgotPassword} >
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
