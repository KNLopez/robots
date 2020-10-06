import React from "react";
import { useSelector } from "react-redux";
import Users from "./ui/Users";
import Box from "./Box";
import { getAllUsers } from "./state/selectors";

function App() {
  const users = useSelector(getAllUsers);

  return <Box>{users && <Users userList={users} />}</Box>;
}

export default App;
