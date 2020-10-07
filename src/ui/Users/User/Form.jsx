import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/selectors";
import { createUser, updateUser } from "../../../state/actions";
import FormBox from "./FormBox";
import Button from "../../components/Button";
import CloseButton from "../../components/CloseButton";

const Form = ({ user, handleClose }) => {
  const currentUser = useSelector((state) => getUser(state, user)) || {};
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        street: e.target.street.value,
        city: e.target.city.value,
      },
      phone: e.target.phone.value,
      website: e.target.website.value,
    };
    if (user) {
      payload.id = user;
      dispatch(updateUser(user, payload));
      alert(`User ${currentUser.name} updated`);
    } else {
      dispatch(createUser(payload));
      alert(`User ${payload.name} created`);
    }

    handleClose();
  };

  return (
    <FormBox>
      <CloseButton className="close" onClick={handleClose} />

      {currentUser.id ? <h2>Edit User</h2> : <h2>Add User</h2>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          defaultValue={currentUser.name || undefined}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          defaultValue={currentUser.email || undefined}
        />
        <Input
          type="text"
          placeholder="Street Address"
          name="street"
          defaultValue={
            currentUser.address ? currentUser.address.street : undefined
          }
        />
        <Input
          type="text"
          placeholder="City"
          name="city"
          defaultValue={
            currentUser.address ? currentUser.address.city : undefined
          }
        />
        <Input
          type="text"
          placeholder="Phone Number"
          name="phone"
          defaultValue={currentUser.phone || undefined}
        />
        <Input
          type="text"
          placeholder="Website"
          name="website"
          defaultValue={currentUser.website || undefined}
        />
        <Button fullWidth>Submit</Button>
      </form>
    </FormBox>
  );
};

Form.propTypes = {
  id: PropTypes.number,
};

Form.defaultProps = {
  id: null,
};

export default Form;
