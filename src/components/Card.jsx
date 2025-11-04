function Card({ name, para, image }) {
  const cardStyle = {
    background: "#fff",
    color: "#222",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
    width: "300px"
  };

  const imgStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
  };

  const bodyStyle = {
    padding: "12px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
      <img src={image} alt={name} style={imgStyle} />
      <div style={bodyStyle}>
        <h4 style={{ margin: "6px 0", fontSize: "1.05rem" }}>{name}</h4>
        <p style={{ margin: 0, color: "#444" }}>{para}</p>
      </div>
    </div>
  );
}

export default Card;
