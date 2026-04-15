import { useState } from "react";
import { Button } from "./Button"

function App() {
   const [person, setPerson] = useState({name: "John", age: 100})

  const handleClick = () => {
    setPerson((prevPerson) => ({...prevPerson, age: prevPerson.age + 1}))
  }

  

  return (
    <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <button onClick={handleClick}>Increase Age</button>
    </>
  )
}

export default App
