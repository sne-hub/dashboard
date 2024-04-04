import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Theme from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenForm, toggleSideBar } from "../../redux/slice";

const TopBar = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  const sidebar = useSelector((state) => state.showSideBar);

  return (
    <Box
      display="flex"
      boxShadow={1}
      sx={{ justifyContent: "space-between" }}
      p={2}
      height="12vh"
      width="100vw"
    >
      <Box display="flex" sx={{ justifyContent: "space-around" }}>
        <Box>
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQFCcKoFArL0Zg/company-logo_200_200/0/1634305511035?e=2147483647&v=beta&t=yPiNpNVXBH4WHfhXSEJ2kRAnNp56DrObVPsl4PRPHsw"
            alt="logo"
            width="80px"
            boxShadow={1}
            borderradius="50%"
            height="100%"
            style={{ borderRadius: "50%", marginBottom: 3 }}
          />
        </Box>
      </Box>
      <Box display="flex" boxShadow={1} borderRadius={2} p={0.25} height="70%" width="35%">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ color: "blue", p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex" borderRadius={1} borderColor="red" boxShadow={1} height="70%">
        <IconButton>
          <Theme />
        </IconButton>
        <IconButton>
          <CircleNotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
        {/* {signedIn && <PersonIcon />} */}
        <Button
          sx={{ color: "blue" }}
          onClick={() => dispatch(toggleOpenForm(true))}
        >
          sign up
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
