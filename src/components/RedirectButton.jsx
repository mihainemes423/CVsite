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
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 24px",
      backgroundColor: "#2d3748",
      color: "white",
      border: `${borderWidth} ${borderStyle} ${borderColor}`,
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      width: width,
      height: height,
      fontSize: fontSize,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      transform: "translateY(0)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      willChange: "transform, box-shadow",
      gap: gap,
      margin: margin,
      textDecoration: "none",
    };
  
    const hoverStyle = {
      transform: "translate3d(0, -3px, 0)",
      boxShadow: "0 8px 16px rgba(255, 204, 0, 0.3)",
      borderColor: "#ffcc00",
      backgroundColor: "#3c4a5e" // Culoare mai deschisă la hover
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