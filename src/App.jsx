import { Button } from "./Button"

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}> {animal}</li> : null;
      })}
    </ul>
  )
}



function App() {
   const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h1>Animals:</h1>
      <List animals={animals} />
    </>
  )
}

export default App
