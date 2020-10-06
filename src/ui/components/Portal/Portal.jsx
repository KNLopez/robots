import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import OutsideClick from "../../../hooks/outsideClick";
import Box from "./Box";

const Portal = ({ handleClickOutside, children }) => {
  const mount = document.getElementsByTagName("body")[0];
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(
    <OutsideClick handleClickOutside={handleClickOutside}>
      <Box>{children}</Box>
    </OutsideClick>,
    el
  );
};

export default Portal;
