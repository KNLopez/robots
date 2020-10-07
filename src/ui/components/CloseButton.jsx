import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "./Button";

const StyledButton = styled(Button)`
  height: 30px;
  width: 30px;
  position: absolute;
  color: #000;
  right: 0;
  top: 0;
  border: none;
  background: none;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  line-height: 0;
  margin: 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: rotate(180deg);
  }
  padding: 0;
`;

const CloseButton = ({ children, ...props }) => {
  return <StyledButton {...props}>x</StyledButton>;
};

CloseButton.propTypes = {
  userList: PropTypes.array,
  handleChange: PropTypes.func,
};

CloseButton.defaultProps = {
  userList: [],
  handleChange: null,
};

export default CloseButton;
