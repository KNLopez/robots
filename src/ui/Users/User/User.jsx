import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/selectors";
import Box, { UserBox } from "./UserBox";
import { deleteUser } from "../../../state/actions";

const User = ({ user, handleClose }) => {
  const [editMode, setEditMode] = useState();

  const currentUser = useSelector((state) => getUser(state, user));
  const dispatch = useDispatch();

  const userRenderer = () => {
    return (
      <UserBox>
        <div>
          <img
            src={`https://robohash.org/${currentUser.id}`}
            alt={currentUser.name}
          />
        </div>
        <div>
          <h3>{currentUser.name}</h3>
        </div>
        <div>{currentUser.email}</div>
        <div>
          {currentUser.address.street}, {currentUser.address.city}
        </div>
        <div>{currentUser.phone}</div>
        <div>{currentUser.website}</div>
        <button className="close" onClick={handleClose}>
          x
        </button>
      </UserBox>
    );
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm("Delete user?");
    if (confirmation) {
      dispatch(deleteUser(user));
      alert(`${currentUser.name} was deleted`);
      handleClose();
    }
  };

  return (
    <Box>
      {editMode ? (
        <>
          <Form handleClose={handleClose} user={user} />
          <button className="backButton" onClick={() => setEditMode(!editMode)}>
            Back
          </button>
        </>
      ) : (
        <>
          {userRenderer()}
          <button className="editButton" onClick={() => setEditMode(!editMode)}>
            Edit
          </button>
          <button className="deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </Box>
  );
};

User.propTypes = {
  userList: PropTypes.array,
};

User.defaultProps = {
  userList: [],
};

export default User;
