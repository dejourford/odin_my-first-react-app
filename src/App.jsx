import { Button } from "./Button"

function App() {


  const handleButtonClick = (url) => {
    window.location.href = url;
  }

  return (
    <>
      <Button handleClick={() => handleButtonClick('https://www.google.com')} />
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </>
  )
}

export default App
