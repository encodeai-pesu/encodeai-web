import React from "react";

const GradientCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Gradient Card</h2>
        <p style={styles.text}>
          This is a card with an animated gradient border.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    position: "relative",
    width: "300px",
    height: "200px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#333",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 8px",
  },
  text: {
    fontSize: "1rem",
    margin: "0",
  },
  gradientBorder: {
    content: "''",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    zIndex: -1,
    background: "linear-gradient(270deg, purple, orange, pink, purple)",
    backgroundSize: "300% 300%",
    animation: "gradient 6s infinite",
    borderRadius: "18px",
  },
};

export default GradientCard;
