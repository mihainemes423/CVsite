import React from "react";

const RedirectButton = ({ url, text }) => {
  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#2d3748",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    backgroundColor: "#4a5568",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={url}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

export default RedirectButton;