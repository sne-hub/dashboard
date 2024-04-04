import { setErrorMessage } from "../redux/slice";
import store from "../redux/store";

const checkRegister = (users, userName,password,name,surname) => {
  if(!userName||!password||!name||!surname){
    store.dispatch(setErrorMessage("please fill in all the fields"));

  }
  if (users.find((user) => user.userName === userName)) {
    store.dispatch(setErrorMessage("user exists log in instead"));
  }
};
export default checkRegister;
