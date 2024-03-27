import { setErrorMessage } from "../redux/slice";
import store from "../redux/store";

const checkRegister = (users, userName) => {
  if (users.find((user) => user.userName === userName)) {
    store.dispatch(setErrorMessage("user exists log in instead"));
  }
};
export default checkRegister;
