import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Theme from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenForm, toggleSideBar } from "../../redux/slice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TopBar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.showSideBar);
  return (
    <Box
      display="flex"
      boxShadow={1}
      sx={{ justifyContent: "space-between" }}
      p={2}
      width="100vw"
    >
      <Box display="flex" sx={{ justifyContent: "space-around" }}>

        <Box>
          <img
            src="https://media.licdn.com/dms/image/C4E1BAQG1X-Gki_rqUw/company-background_10000/0/1634305929178/bluecloud_ai_cover?e=2147483647&v=beta&t=QyCTh8_CdN73biOTOcvth12jNeQrzqPXAJfaX29xvAI"
            alt="logo"
            width="50px"
            style={{ borderRadius: "50%", marginBottom: 3 }}
          />
          <Typography>BlueCloudai</Typography>
        </Box>
      </Box>
      <Box display="flex" boxShadow={1} borderRadius={2} p={0.25}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ color: "blue", p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex" borderRadius={1} borderColor="red" boxShadow={1}>
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
        <IconButton
          sx={{ color: "blue" }}
          onClick={() => dispatch(toggleOpenForm())}
        >
          sign up
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
