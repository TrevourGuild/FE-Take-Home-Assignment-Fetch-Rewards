import React from 'react'

export default function UserForm(props) {
    const {
        values, 
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    const onChange = evt =>{
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className='create-user-form' onSubmit={onSubmit}>

        <div className = 'errors'>
        
            <div>{errors.fullName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.occupation}</div>
            <div>{errors.state}</div>
        </div>
        
        <form>
          <h1>Create User Form</h1>
          <label>
            Full Name:
            <input
                value = {values.fullName}
                onChange={onChange}
                name = 'fullname'
                type = 'text'
            />
          </label>
          <label>
            Email:
            <input
               value = {values.email}
               onChange={onChange}
               name = 'email'
               type = 'text'
            />
          </label>
          <label>
            Password:
            <input
               value = {values.password}
               onChange={onChange}
               name = 'password'
               type = 'text'
            />
          </label>
    
        
          <label> Occupation:
          <select
            onChange={onChange}
            value = {values.occupation}
            name = 'occupation'
          >
          <option value = ''>- Select an Occupation -</option>
          <option value = {"occupations"}></option>
          </select>
          </label>
    
    
          <label> State:
          <select
            onChange={onChange}
            value = {values.state}
            name = 'state'
          >
          <option value = "">- Select a state -</option>
          <option value = {'states'}></option>
          </select>
          </label>
          </form>
          
    
          <input disabled={disabled} type = 'submit' value = "Submit"/>
        </div>
      );
}