import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showSideBar: false,
  collapsed: false,
  selected: "Dashboard",
  formOpen: false,
  userName: "",
  password: "",
  user: {},
  users: [],
  errorMessage: "",
  registerOpen: false,
  forgotPassword: false,
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
    toggleOpenForm: (state) => {
      state.formOpen = !state.formOpen;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addToUsers: (state) => {
      state.users.push(state.user);
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    openRegister: (state) => {
      state.registerOpen = !state.registerOpen;
    },
    updatePassword: (state) => {
      console.log("dispatched");
      state.forgotPassword = !state.forgotPassword;
    },
  },
});
export const {
  toggleSideBar,
  setIsCollapsed,
  openRegister,
  setSelected,
  toggleOpenForm,
  setPassword,
  setUserName,
  setUser,
  setErrorMessage,
  updatePassword,
  addToUsers,
} = dashboardReducer.actions;
export default dashboardReducer.reducer;
