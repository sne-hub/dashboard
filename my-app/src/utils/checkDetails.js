import { setErrorMessage } from "../redux/slice";
import store from "../redux/store";

const checkLogIn = (users, userName) => {
  if (!users.find((user) => user.userName === userName)) {
    store.dispatch(setErrorMessage("no user found please register instead"));
  }
};

export default checkLogIn;
