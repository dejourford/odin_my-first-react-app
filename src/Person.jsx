import { useState } from "react";

export function Person() {
    const [person, setPerson] = useState({firstName: "De'Jour", lastName: "Ford", age: 33})
    
    return (
        <h1>{person.firstName} {person.lastName}</h1>
    )
}
