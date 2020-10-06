import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getHeaders } from "../../state/selectors";
import Table from "../components/Table";
import Portal from "../components/Portal/Portal";
import User from "./User/User";
import Form from "./User/Form";

const Users = ({ userList }) => {
  const [users, setUsers] = useState(userList);
  const [user, setUser] = useState(null);
  const [addUser, setAddUser] = useState(false);
  const headers = useSelector(getHeaders);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  const handleChange = (val) => {
    const keyWord = val.toLowerCase();
    const newUsers = userList.filter((user) => {
      return (
        user.name.toLowerCase().includes(keyWord) ||
        user.email.toLowerCase().includes(keyWord) ||
        user.address.street.toLowerCase().includes(keyWord) ||
        user.address.city.toLowerCase().includes(keyWord) ||
        user.phone.toLowerCase().includes(keyWord) ||
        user.website.toLowerCase().includes(keyWord)
      );
    });

    setUsers(newUsers);
  };

  const handleShowUser = (id) => {
    setUser(id);
    setAddUser(false);
  };

  const renderUsers = users.map((user) => (
    <div
      className="tableRow"
      key={user.id}
      onClick={() => handleShowUser(user.id)}
      onKeyDown={() => handleShowUser(user.id)}
      tabIndex={0}
    >
      <div>
        <img src={`https://robohash.org/${user.id}`} alt={user.name} />
        {user.name}
      </div>
      <div>{user.email}</div>
      <div>
        {user.address.street}, {user.address.city}
      </div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </div>
  ));

  const handleAddrow = () => {
    setAddUser(true);
    setUser(null);
  };

  const handeClosePortals = () => {
    setAddUser(false);
    setUser(null);
  };

  return (
    <>
      <Table
        handleChange={handleChange}
        headers={headers}
        handleAddRow={handleAddrow}
      >
        {renderUsers}
      </Table>
      {user && (
        <Portal handleClickOutside={handeClosePortals}>
          <User user={user} handleClose={() => setUser(null)} />
        </Portal>
      )}
      {addUser && (
        <Portal handleClickOutside={handeClosePortals}>
          <Form user={user} handleClose={() => setAddUser(false)} />
        </Portal>
      )}
    </>
  );
};

Users.propTypes = {
  userList: PropTypes.array,
};

Users.defaultProps = {
  userList: [],
};

export default Users;
