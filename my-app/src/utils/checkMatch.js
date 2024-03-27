import { setErrorMessage } from "../redux/slice";
import store from "../redux/store";

const checkMatch = (users, userName, password) => {
  if (
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
