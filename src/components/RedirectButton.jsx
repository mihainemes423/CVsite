import React from "react";

const RedirectButton = ({ 
  url, 
  text, 
  width= "auto",
  height= "auto",
  fontSize= "16px",
  borderColor = "white",
  borderWidth = "2px",
  borderStyle = "solid",
  margin = "1px",
  gap = "8px", 
  }) => {
  const buttonStyle = {
    display: "inline-flex",
    gap: gap,
    alignItems: "center",
    justifyContent: "center",
    gap: gap,
    margin: margin,
    padding: "12px 24px",
    backgroundColor: "#2d3748",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    width: width || "auto",
    height: height || "auto",
    fontSize: fontSize || "16px", 
  };

  const hoverStyle = {
    //backgroundColor: "#ffcc00",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(255, 204, 0, 0.6)",
    border: "2px solid #ffcc00"
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