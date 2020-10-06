import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutSideClick(ref, outSideClickHandler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        outSideClickHandler && outSideClickHandler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, outSideClickHandler]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideClick({ handleClickOutside, children }) {
  const wrapperRef = useRef(null);
  useOutSideClick(wrapperRef, handleClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideClick.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideClick;
