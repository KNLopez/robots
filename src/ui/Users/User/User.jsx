import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/selectors";
import Box, { UserBox } from "./UserBox";
import { deleteUser } from "../../../state/actions";
import Button from "../../components/Buttons/Button";
import CloseButton from "../../components/Buttons/CloseButton";

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
        <CloseButton className="close" onClick={handleClose} />
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
          <Button
            className="backButton"
            fullWidth
            onClick={() => setEditMode(!editMode)}
          >
            Back
          </Button>
        </>
      ) : (
        <>
          {userRenderer()}
          <Button
            className="editButton"
            fullWidth
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </Button>
          <Button className="deleteButton" fullWidth onClick={handleDelete}>
            Delete
          </Button>
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
