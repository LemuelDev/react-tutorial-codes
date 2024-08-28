
function App() {
  const cities = ['Manila', 'Zambales', 'Pampanga', 'Cebu']
  const newCities = cities.filter(city => city !== 'Cebu')

  const person = [
    {
    id: 0,
    name: 'John Lemuel Encina',
    age: 18,
    },
    {
      id: 1,
      name: 'Aera Casey Campos',
      age: 20,
    },
    {
      id: 2,
      name: 'Clarence Mayor',
      age: 19,
    },
    {
      id: 3,
      name: 'Angelo Muyano',
      age: 20,
    },
    {
      id: 4,
      name: 'Yesha Elacion',
      age: 19,
     },
    
  ]
  return (
      <>
      <h1>City</h1>
        <ul className="list-group">
          {newCities.map((city, index) => (
            <li className="list-group-item" key={index}>{city}</li>
          ))}
        </ul>
        <hr />
      {person.length > 0 ? 
        <div>
              <h1>Table</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {person.map(data => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age < 20 ? 'Young' : 'Old'}</td>
               </tr>
                )
            })}
          </tbody>
        </table>
        </div>
        : '...loading'}
      </>
   );
}

export default App


