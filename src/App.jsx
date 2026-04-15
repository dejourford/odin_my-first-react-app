import { useState } from "react";
import { Button } from "./Button"
import { Person } from "./Person";
import { Input } from "./Input";

function App() {
   
const [firstName, setfirstName] = useState("");
const [lastName, setLastName] = useState("");  

  return (
    <>
    <p>{firstName} {lastName}</p>
    <Input
     value={firstName} 
     onChange={(e) => setfirstName(e.target.value)}
     placeholder="first name"
     />
    <input
     value={lastName} 
     onChange={(e) => setLastName(e.target.value)}
     placeholder="last name"
     />
    </>
  )
}

export default App
