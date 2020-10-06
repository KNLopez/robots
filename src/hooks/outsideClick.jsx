import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutSideClick(ref, outSideClickHandler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        outSideClickHandler && outSideClickHandler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, outSideClickHandler]);
}

function OutsideClick({ handleClickOutside, children }) {
  const wrapperRef = useRef(null);
  useOutSideClick(wrapperRef, handleClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideClick.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideClick;
