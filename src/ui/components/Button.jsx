import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  color: #fff;
  padding: 8px 24px;
  border: 0;
  font-size: 24px;
  cursor: pointer;
  border-radius: 6px;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  userList: PropTypes.array,
  handleChange: PropTypes.func,
};

Button.defaultProps = {
  userList: [],
  handleChange: null,
};

export default Button;
