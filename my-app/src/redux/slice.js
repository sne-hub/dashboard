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
  isLoading:false,

  errorMessage: "",
  registerOpen: false,
  forgotPassword: false,
  name: "",
  surname: "",
  signedIn: false,
  logged: "",
  role: "",
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
    toggleOpenForm: (state, action) => {
      state.formOpen = state.errorMessage ? state.formOpen : action.payload;
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
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    addToUsers: (state) => {
      state.users.push(state.user);
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    openRegister: (state, action) => {
      state.registerOpen = action.payload;
    },
    updatePassword: (state, action) => {
      state.forgotPassword = action.payload;
    },
    signIn: (state, action) => {
      state.signedIn = action.payload;
    },
    setLogged: (state, action) => {
      state.logged = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setIsLoading:(state,action)=>{
      state.isLoading= action.payload
    }
  },
});

export const {
  toggleSideBar,
  setLogged,
  setRole,
  setIsLoading,
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
  setName,
  setUsers,
  signIn,
  setSurname,
} = dashboardReducer.actions;
export default dashboardReducer.reducer;
