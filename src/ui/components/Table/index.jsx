import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import Input from "../Input";
import { ReactComponent as AddIcon } from "./plus.svg";

const Table = ({ headers, children, handleChange, handleAddRow }) => {
  const renderBody = () => <div className="tableBody">{children}</div>;

  const tableHeader = () => (
    <div className="tableHeader">
      {headers.map((header) => (
        <div key={header}>{header}</div>
      ))}
    </div>
  );

  const handleTextChange = (e) => {
    handleChange(e.target.value);
  };

  const tableControls = () => (
    <div className="tableControls">
      {handleChange && (
        <Input
          type="text"
          onChange={handleTextChange}
          placeholder="Search Table"
        />
      )}
      <button onClick={handleAddRow}>
        <AddIcon />
        Add User
      </button>
    </div>
  );

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
