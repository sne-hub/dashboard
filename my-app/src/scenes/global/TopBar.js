import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import Theme from "../../Theme";

const TopBar = () => {
  return (
    <Box display="flex" justfyContent="space-between" flexDirection="row">
      <Box
        display="flex"
        backgroundColor="hsl(0, 0%, 85%)"
        borderRadius={1}
        p={0.25}
      >
        <IconButton>
          <SearchIcon
            style={{ display: "flex", color: "blue" }}
            type="button"
          />
        </IconButton>

        <InputBase />
      </Box>
      <Box>
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
       
      </Box>
    </Box>
  );
};

export default TopBar;
