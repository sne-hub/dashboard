import { setErrorMessage, setIsLoading, setUsers } from "./slice";

const fetchAllUsersThunk = (url) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
        const response = await fetch(url)
        const data= await response.json()
        dispatch(setUsers(data))
        dispatch(setIsLoading(false))
    } catch (error) {
        dispatch(setErrorMessage(error.message))
    }
  };
};
export default fetchAllUsersThunk
