import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import Input from "../Input";
import { ReactComponent as AddIcon } from "./plus.svg";
import Button from "../Buttons/Button";

const Table = ({ headers, children, handleChange, handleAddRow }) => {
  const tableControls = () => (
    <div className="tableControls">
      {handleChange && (
        <Input
          type="text"
          onChange={handleTextChange}
          placeholder="Search Table"
        />
      )}
      <Button onClick={handleAddRow}>
        <AddIcon />
        Add User
      </Button>
    </div>
  );

  const tableHeader = () => (
    <div className="tableHeader">
      {headers.map((header) => (
        <div key={header}>{header}</div>
      ))}
    </div>
  );
  const renderBody = () => <div className="tableBody">{children}</div>;

  const handleTextChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <Box clickable={Boolean(handleChange)}>
      {tableControls()}
      <div className="table">
        {tableHeader()}
        {renderBody()}
      </div>
    </Box>
  );
};

Table.propTypes = {
  userList: PropTypes.array,
  handleChange: PropTypes.func,
};

Table.defaultProps = {
  userList: [],
  handleChange: null,
};

export default Table;
