import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  padding: 8px 24px;
  font-size: 24px;
  border: 1px solid #efefef;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
`;

const Input = ({ onChange, placeholder, type, style, ...rest }) => {
  return (
    <StyledInput
      {...rest}
      style={style}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  userList: PropTypes.array,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  userList: [],
  handleChange: null,
};

export default Input;
