import { setErrorMessage } from "../redux/slice";
import store from "../redux/store";

const checkMatch = (users, userName, password) => {
  if (!userName) {
    store.dispatch(setErrorMessage("Please enter user name"));
  } else if (!password) {
    store.dispatch(setErrorMessage("Please enter valid password"));
  } else if (!users.find((user) => user.userName === userName)) {
    store.dispatch(setErrorMessage("no user found please register instead"));
  } else if (
    !users.find(
      (user) => user.userName === userName && user.password === password
    )
  ) {
    store.dispatch(
      setErrorMessage(
        "Incorrect details please check your password and or userName"
      )
    );
  }
};
export default checkMatch;
