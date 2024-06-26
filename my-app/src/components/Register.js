import { Button, FormControl, TextField, Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUsers,
  openRegister,
  setErrorMessage,
  setLogged,
  setName,
  setPassword,
  setRole,
  setSurname,
  setUser,
  setUserName,
  signIn,
  toggleOpenForm,
} from "../redux/slice";
import checkRegister from "../utils/checkRegister";
import store from "../redux/store";

export const Register = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const users = useSelector((state) => state.users);
  const errorMessage = useSelector((state) => state.errorMessage);
  const name = useSelector((state) => state.name);
  const surname = useSelector((state) => state.surname);
  const role = useSelector((state) => state.role);

  const handleUserName = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setUserName(e.target.value));
  };

  const handleRole = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setRole(e.target.value));
  };

  const handleName = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setName(e.target.value));
  };

  const handleSurname = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setSurname(e.target.value));
  };

  const handlePassword = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(""));
    dispatch(setPassword(e.target.value));
  };

  const saveUser = (e) => {
    e.preventDefault();
    checkRegister(users, userName, password, name, surname);
    dispatch(setRole(role));

    dispatch(setUser({ name, surname, userName, password, role }));
    dispatch(setLogged(`${name} ${surname}`));
    dispatch(addToUsers());
    dispatch(setUserName(""));
    dispatch(setPassword(""));
    dispatch(setName(""));
    dispatch(setSurname(""));
    dispatch(setUser({}));
    if (!store.getState().errorMessage) {
      dispatch(openRegister(false));
      dispatch(toggleOpenForm(false));
      dispatch(signIn(true));
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
            label="enter first name"
            value={name}
            onChange={handleName}
          ></TextField>{" "}
          <TextField
            label="enter surname name"
            value={surname}
            sx={{ marginTop: 2, marginBottom: 2 }}
            onChange={handleSurname}
          ></TextField>
          <TextField
            label="enter your occupation"
            value={role}
            sx={{ marginTop: 2, marginBottom: 2 }}
            onChange={handleRole}
          ></TextField>
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
          <Button variant="contained" onClick={saveUser}>
            sign up
          </Button>
          <Box
            style={{ borderBottom: "1px solid #e0e0e0", margin: "10px 0" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
