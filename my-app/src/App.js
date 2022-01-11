import React from 'react'
import './App.css';

const initialValue = {
  fullName: "",
  email: "",
  password: "",
  occupation: [],
  state: []
}



function App() {

  const [items, setItems] = React.useState([])

  React.useEffect(() =>{
    async function getDropdownValues(){
      const response = await fetch('https://frontend-take-home.fetchrewards.com/form')
      const body = await response.json()
      setItems(body.results.map(({})))
    }
  })






  return (
    <div className='create-user-form'>
    <form>
      <h1>Create User Form</h1>
      <label>
        Full Name:
        <input
            type = 'text'
            name= "fullName"
        />
      </label>
      <label>
        Email:
        <input
            type = 'text'
            name="email"
        />
      </label>
      <label>
        Password:
        <input
            type = 'text'
            name="password"
        />
      </label>

      <form action = "https://frontend-take-home.fetchrewards.com/form" method = 'GET'>
      <label> Occupation:
      <select
      >
      <option value = {"occupations"}>- Select an Occupation -</option>
      </select>
      </label>


      <label> State:
      <select>
      <option value = "states">- Select a state -</option>
      </select>
      </label>
      </form>
      

      <input type = 'submit' value = "Submit"/>
    </form>



    </div>
  );
}

export default App;
