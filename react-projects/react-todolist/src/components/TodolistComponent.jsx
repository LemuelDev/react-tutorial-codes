import { useState } from "react"

const TodolistComponent = () => {

    const [list, setList] = useState([])
    
    const handleForm = (event) => {
        event.preventDefault()
        const listtask = event.target.elements.task.value
        list.push(listtask)
        setList(list)
    }
    const handleRemoveList = (listIndex) => {
        const filteredList = list.filter((item, index) => index !== listIndex)
        setList(filteredList)
    }


  return (
    <form className="" onSubmit={handleForm}>
        <input type="text" name="task" placeholder="Enter todo" />
        {list.map((item, index) => {
            return (
                <div key={index}>
                    <li>{item}</li>
                    <button onClick={() => handleRemoveList(index)}>Remove</button>
                    <input type="checkbox" name="checktask" />
                </div>
            )
        })}
        <button type="submit">Submit</button>
    </form>
  )
}

export default TodolistComponent