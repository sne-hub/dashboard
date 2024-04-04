import { setErrorMessage, setLogged, setRole, setUser } from "../redux/slice";
import store from "../redux/store";

const checkRecover = (users, userName, newPassword, password,otp, otpNumber) => {
  if (!userName || !password || !newPassword) {
    store.dispatch(setErrorMessage("please fill in all the fields"));
  }
  if (users.find((user) => user.userName === userName)) {
    let obj = users.filter((user) => user.userName === userName)[0];
    store.dispatch(
      setUser({
        ...obj,
        password: newPassword,
      })
    );
    store.dispatch(setLogged(`${store.getState().user.name} ${store.getState().user.surname}`));
    store.dispatch(setRole(store.getState().user.role))

  }
  if (!users.find((user) => user.userName === userName)) {
    store.dispatch(
      setErrorMessage("the username provided does not exist sign up instead")
    );
  }
  if (newPassword !== password) {
    store.dispatch(setErrorMessage("your passwords do not match"));
  }
  if (otp !== otpNumber) {
    store.dispatch(setErrorMessage("incorrect OTP number"));
  }
};
export default checkRecover;
