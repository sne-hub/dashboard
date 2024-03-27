import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/slice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <FormControl  sx={{  width: "100%" }}>
        <TextField
          label="enter email address"
          sx={{ margin: 3 }}
        ></TextField>
        <Button onClick={() => dispatch(updatePassword())}>submit</Button>
        <Button onClick={() => dispatch(updatePassword())}>cancel</Button>
      </FormControl>
    </Box>
  );
};

export default ForgotPassword;
