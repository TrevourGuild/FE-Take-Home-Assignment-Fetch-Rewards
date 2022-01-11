import React, {useState, useEffect} from 'react'
import './App.css';
import UserForm from './UserForm';
import NewUser from './NewUser';
import schema from '../validation/formSchema'
import { reach } from 'yup'
import axios from 'axios'

const initialFormValues = {
  fullName: "",
  email: "",
  password: "",
  occupation: '',
  state: ''
}

const initialFormErrors = {
  fullName: '',
  email: '',
  password: '', 
  occupation: '',
  state: ''
}

const initialUsers = []
const initialDisabled = true

export default function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getDropdown = () =>{
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(res =>{
        setUsers(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  }

  const postNewUser = NewUser =>{
    axios.post('https://frontend-take-home.fetchrewards.com/form', NewUser)
      .then(res =>{
        setUsers([res.data, ...users])
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) =>{
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) =>{
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () =>{
    const newUser = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      occupation: [getDropdown()].filter(occ => formValues[occ]),
      state: [getDropdown()].filter(sta => formValues[sta])
    }
    postNewUser(newUser)
  }

  useEffect(() =>{
    getDropdown()
  }, [])

  useEffect(() =>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <UserForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
      />

      {
        users.map(user =>{
          return (
            <NewUser key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}

