import React, { useEffect } from "react";
import fetchAllUsersThunk from "../redux/fetchUsersThunk";
import { useDispatch } from "react-redux";
import store from "../redux/store";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsersThunk("/data.json"));
    console.log(store.getState().users);
  }, [dispatch]);
  return <div>Users</div>;
};

export default Users;
