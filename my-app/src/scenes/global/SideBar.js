import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setSelected, toggleSideBar } from "../../redux/slice";

const Item = ({ title, to, icon }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "grey" }}
      onClick={() => dispatch(setSelected(title))}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const selected = useSelector((state) => state.selected);
  const collapsed = useSelector((state) => state.collapsed);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        ".pro-sidebar-inner": {
          background: "#c0c0c0",
        },
        " .pro-icon-wrapper": { background: "transparent" },
        ".pro-inner-item": {
          padding: "5px 35px 5px 20px",
        },
        ".pro-inner-item:hover": {
          color: "#868dfb",
        },
        ".pro-menu-item.active": {
          color: "#6870fa",
        },
      }}
    >
      <ProSidebar>
        <Menu>
          {!collapsed && (
            <Box>
              <Box>
                <IconButton onClick={() => dispatch(toggleSideBar())}>
                  <CloseOutlinedIcon
                    sx={{ color: "e6e6e6" }}
                  ></CloseOutlinedIcon>
                </IconButton>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/675/373/original/female-avatar-images-png.png"
                  alt="profile"
                  width="100px"
                  height="100px"
                  style={{ boderRadius: "50%", cursor: "pointer" }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold" color="e6e6e6">
                  Sinenhlanhla
                </Typography>
                <Typography variant="h6" color="green">
                  web
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
            />{" "}
            <Item
              title="Contacts"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
            />{" "}
            <Item
              title="Profile-form"
              icon={<PersonOutlinedIcon />}
              to="/profile"
              selected={selected}
            />{" "}
            <Item
              title="Calender"
              icon={<CalendarTodayOutlinedIcon />}
              to="/calender"
              selected={selected}
            />{" "}
            <Item
              title="Bar-chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar-chart"
              selected={selected}
            />{" "}
            <Item
              title="Pie-chart"
              icon={<PieChartOutlineOutlinedIcon />}
              to="/pie-chart"
              selected={selected}
            />{" "}
            <Item
              title="Invoices"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
              selected={selected}
            />{" "}
            <Item
              title="Line-chart"
              icon={<TimelineOutlinedIcon />}
              to="/line-chart"
              selected={selected}
            />{" "}
            <Item
              title="Geography-chart"
              icon={<MapOutlinedIcon />}
              to="/geography-chart"
              selected={selected}
            />{" "}
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              to="./"
              selected={selected}
            />{" "}
            <Item
              title="faq"
              icon={<HelpOutlineOutlinedIcon />}
              to="/faq"
              selected={selected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
