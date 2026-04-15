import { useState } from "react";
import { Button } from "./Button"

function App() {
   const colors = ["pink", "red", "blue", "green", "orange"];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const handleClick = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div style={{backgroundColor}}>
      {colors.map((color, index) => 
        <button key={index} onClick={() => handleClick(color)}>{color}</button>
      )}
      
      
    </div>
  )
}

export default App
