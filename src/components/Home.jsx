import Data from "./Data";
import Skills from "./Skills";
import Card from "./Card";

function Home({ obj, cards = [] }) {
  const style = {
    background: "#3a3a3a",
    color: "#fff",
    minHeight: "150px",
    padding: "20px",
    borderRadius: "8px",
  };
  const cardContainer = {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "center",
  };


  return (
    <div style={{ padding: "16px" }}>
      <div style={style}>
        <h2>Main home data — Hello {obj.name}</h2>
        <Skills />
        <Data obj={obj} />
      </div>

      <h2 style={{ marginTop: "18px", textAlign:"center"}}>Cards</h2>
      <div style={cardContainer}>
        {cards.map((c, idx) => (
          <Card key={idx} name={c.name} para={c.para} image={c.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
