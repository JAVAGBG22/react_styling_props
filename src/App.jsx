import { useState } from "react";
import Button from "./Button";
import NameTag from "./components/NameTag";
import Card from "./components/Card";
import Image from "./components/Image";

const nameStyle = {
  color: "green",
  border: "1px solid green",
};

const nameStyleTwo = {
  borderStyle: "dotted",
  letterSpacing: "1px",
  padding: "1rem",
};

const initNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Johansson" },
  { firstName: "Janne", lastName: "Johansson" },
  { firstName: "Arne", lastName: "Johansson" },
];

function App() {
  const [names, setNames] = useState(initNames);

  return (
    <>
      <div className="container">
        <h1 style={{ color: "blue" }}>Name List</h1>
        <h2 className="css-style">Style with CSS</h2>
        <h1 style={{ ...nameStyle, ...nameStyleTwo }}>Object styling</h1>
        <Image />
        <Card>
          <div>
            <p>This is a Card</p>
          </div>
        </Card>
        <Card reverse={true}>
          <p>Another Card</p>
        </Card>
        {names.map((n, i) => {
          return (
            <NameTag
              style={{ color: "magenta" }}
              firstName={n.firstName}
              lastName={n.lastName}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
