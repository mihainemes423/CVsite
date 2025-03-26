import React from "react";

const RedirectButton = ({ 
  url, 
  text, 
  width,       // <- Nou prop pentru lățime
  height,      // <- Nou prop pentru înălțime
  fontSize,    // <- Nou prop pentru dimensiunea textului
  borderColor = "white", // 👈 Valoare implicită albă
  borderWidth = "2px"
  }) => {
  const buttonStyle = {
    display: "inline-flex",
    gap: "16px",
    alignItems: "center",     // Centrare verticală a textului
    justifyContent: "center",
    gap: "8px",
    //border: "1px dashed #ccc",
    padding: "15px 24px",
    backgroundColor: "#2d3748",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    width: width || "auto",         // Utilizează prop-ul `width` sau valoarea implicită
    height: height || "auto",       // Utilizează prop-ul `height` sau valoarea implicită
    fontSize: fontSize || "16px",   // Utilizează prop-ul `fontSize` sau valoarea implicită   
  };

  const hoverStyle = {
    backgroundColor: "#4a5568",
    transform: "translateY(-1px)", // Efect subtil de ridicare
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
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