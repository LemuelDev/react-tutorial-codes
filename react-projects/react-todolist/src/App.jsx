import { useState } from "react"
import TitleComponent from "./components/TitleComponent"


function App() {

  const [list, setList] = useState([])
    
  const handleForm = (event) => {
      event.preventDefault()
      const listtask = event.target.elements.task.value
      setList((prevList) => [...prevList, listtask]);
  }
  const handleRemoveList = (listIndex) => {
      const filteredList = list.filter((item, index) => index !== listIndex)
      setList(filteredList)
  }


return (
  <>
  <TitleComponent/>
  <form className="" onSubmit={handleForm} style={{maxWidth: '450px',margin: "0 auto", padding: "5rem" , borderRadius: '10px', display: 'grid', placeContent: 'center'}}>
      <input type="text" name="task" placeholder="Enter todo" className="form-control"/>
      <button type="submit" className="btn btn-primary" style={{maxWidth: '500px', margin: '1rem auto'}}>Submit</button>
      {list.map((item, index) => {
          return (
              <div key={index} className="mb-25" style={{display: 'flex', justifyContent:'space-around', alignItems: 'center', padding: '15px'}}>
                  <li>{item}</li>
                  <input type="checkbox" name="checktask" style={{padding: '10px'}}/>
                  <button onClick={() => handleRemoveList(index)} className="btn btn-danger">Remove</button>
              </div>
          )
      })}
  </form>

  </>

  )
}

export default App
