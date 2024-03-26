import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Theme from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/slice";

const TopBar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state)=> state.showSideBar)
  return (
    <Box
      display="flex"
      boxShadow={2}
      sx={{ justifyContent: "space-between" }}
      p={2}
       width={sidebar ? "82vw": "100vw"}
    >
      {!sidebar &&<IconButton type="button" onClick={()=>dispatch(toggleSideBar())} >
        <MenuIcon  />
      </IconButton>}
      
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
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
