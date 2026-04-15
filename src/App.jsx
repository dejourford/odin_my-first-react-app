import { useState } from "react";
import { Button } from "./Button"

function App() {
   const colors = ["pink", "red", "blue", "green", "orange"];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [number, setNumber] = useState(0);

  const handleClick = (color) => {
    setBackgroundColor(color);
    setNumber(number + 1)
  }

  

  return (
    <section style={{backgroundColor}}>
      {colors.map((color, index) => 
        <button key={index} onClick={() => handleClick(color)}>{color}</button>
      )}
      
      <div style={{border: "1px solid black"}} className="tracker">{number}</div>

    </section>
  )
}

export default App
