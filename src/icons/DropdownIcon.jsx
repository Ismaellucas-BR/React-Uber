import React from "react";

function DropdownIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill={props.color}></path>
    </svg>
  );
}

export default DropdownIcon;
