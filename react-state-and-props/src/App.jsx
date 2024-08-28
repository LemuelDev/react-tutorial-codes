// state and props..

import { useState } from "react"
import PropsComponent from "./components/PropsComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import LikeComponent from "./components/LikeComponent";
import ExpandableComponent from "./components/ExpandableComponent";

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('lemuel_dev');
  const [isTrue, setIsTrue] = useState(false)
  const [fruits, setFruits] = useState(['Apple', 'Mango', 'Banana']);
  const [personCopy, setPersonCopy] = useState([{name: 'Lemuel', age: 18}, {name: 'Clarence', age: 20}, {name: 'Angelo', age: 20}, {name: 'Sir Mike', age: 30}])
  const [person, setPerson] = useState([...personCopy]);
  


  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  }

  const handleDecrement = () => {
    setCount((prevState) => count - 1)
  }

  const handleCheck = () => {
    setIsTrue(!isTrue)
  }

  const handleAddFruit = () => {
    setFruits([...fruits, 'strawberry'])
  }

  const handleRemoveFruit = (fruitIndex) => {
    const filterdFruits = fruits.filter((item, index) => index !== fruitIndex )

    setFruits(filterdFruits)
  }

  const handleAbove20 = () => {
      const filterPersons = person.filter((persons) => persons.age >= 20 )
      setPerson(filterPersons)
  }
  const handleShowabove30 = () => {
    const filterPersons = person.filter((persons) => persons.age >= 30)
    setPerson(filterPersons)
  
  }

  const handleShowAll = () => {
    setPerson(personCopy)
  }

  return (
    <>
    <h1>States</h1>
      <h3>Counter</h3>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <h4>Array rendering with useState</h4>
      <div>
        <label>Show List</label>
        <input type="checkbox" checked={isTrue} onChange={handleCheck} />
      </div>
      <button onClick={handleAddFruit}>Add Strawberry</button>
      <ul className="list-group">
      {/* {isTrue && fruits.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))} */}
      {isTrue && fruits.map((item, index) => {
          return (
            <div key={index}>
                <li className="list-group-item">{item}</li>
                <button className="btn btn-danger" onClick={() => handleRemoveFruit(index)}>Remove Fruit</button>
           </div>
            )
      })}

      </ul>

      <hr />
      <h4>Render Person</h4>
      <button onClick={handleAbove20} >Show Above 20</button>
      <button onClick={handleShowabove30}>Show Above 30</button>
      <button onClick={handleShowAll}>Show All list</button>
      {person.map((item, index) => {
        return (
       
            <div key={index}>
                <p key={index}>Name: {item.name} , Age: {item.age}</p>
              
            </div>

          )
      })}

      <hr />
      <br />
      <h4>Props</h4>
    <PropsComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}    />
        <br />
        <br />
      
      <ChildrenComponent>
        <h3>This is a prop component pass as a child to the other component</h3>
        <PropsComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}    />
      </ChildrenComponent>

      <hr />
      <h3>Exercise 1 (Like Component)</h3>
      <LikeComponent onClick={() => console.log('clicked.')}/>

      <hr />
      <h3>Exercise 2 (Expandable Component)</h3>
      <ExpandableComponent maxChars={20}>
        Lorem ipsum dolor lorem ipsum dolor
        Lorem ipsum dolor lorem ipsum dolor
        Lorem ipsum dolor lorem ipsum dolor
        Lorem ipsum dolor lorem ipsum dolor
      </ExpandableComponent> 
    </>
    )
}

export default App
