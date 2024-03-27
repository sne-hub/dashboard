import { Button, FormControl, TextField, Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUsers,
  setErrorMessage,
  setPassword,
  setUser,
  setUserName,
  toggleOpenForm,
} from "../redux/slice";
import checkRegister from "../utils/checkRegister";

export const Register = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const users = useSelector((state) => state.users);
  const errorMessage = useSelector((state) => state.errorMessage);

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

  const saveUser = (e) => {
    e.preventDefault();
    checkRegister(users, userName);
    dispatch(setUser({ userName, password }));
    dispatch(addToUsers());
    dispatch(setUserName(""));
    dispatch(setPassword(""));
    dispatch(setUser({}));
    if (!errorMessage) dispatch(toggleOpenForm());
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
      <Typography variant="h2" fontWeight="bold" color="#008080">
        BlueCloudai
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems={"center"}
        borderRadius={2}
        boxShadow={2}
        sx={{
          width: "40vw",
          height: "50vh",
          margin: "auto",
          background: "white",
        }}
      >
        <Typography>sign in</Typography>

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
        </FormControl>
        <Box display="flex" justifyItems="center" p={2}>
          <Button onClick={saveUser}>sign up</Button>
          <Box
            style={{ borderBottom: "1px solid #e0e0e0", margin: "10px 0" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
