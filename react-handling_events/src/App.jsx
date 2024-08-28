// handling events

function App() {

  // event handlers for button function
  const handleClick = (name) => {
    alert(`Hello there, ${name}!!`)
  }

  // event handlers for form submition

  const handleForm = (event) => {
    event.preventDefault();
    const firstName = event.target.elements.fname.value
    const lastName = event.target.elements.lname.value

    console.log(firstName, lastName);
    event.target.elements.fname.value = ''
    event.target.elements.lname.value = ''
  }
 
  return (
    <>

    {/* event handlers for buttons */}
    <h1>Button onClick</h1>
    <button onClick={()=> handleClick('Lemuel')} className="btn btn-primary"> Click me</button>

    {/* event handlers for inputs */}
    <h1>Input onChange</h1>
    <input type="text" onChange={(event) => console.log(event.target.value)} />

    {/* event handlers for form onSubmit */}

    <h1>Form onSubmit</h1>
    <form className="w-25" onSubmit={handleForm}>
      <div className="mb-3">
        <input type="text" name="fname" placeholder="Enter First Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input type="text" name="lname" placeholder="Enter Last Name" className="form-control" />
      </div>
      <button className="btn bnt-succes" type="submit">Submit Form </button>
    </form>
    </>
  )
}

export default App
