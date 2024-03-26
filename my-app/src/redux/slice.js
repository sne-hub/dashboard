import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showSideBar: false,
  collapsed: false,
  selected: "Dashboard",
};
const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      console.log("toggled");
      state.showSideBar = !state.showSideBar;
    },
    setIsCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});
export const { toggleSideBar,setIsCollapsed,setSelected } = dashboardReducer.actions;
export default dashboardReducer.reducer;
