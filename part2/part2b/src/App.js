import React from 'react';
import { useState } from 'react';
import Person from './components/Person'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([{ }]);
  const [newName, setNewName] = useState('');
  const [numbers, setNumbers] = useState('')

  const Phonebook = [
    { 
      id: 1,
      name: 'Arto Hellas', 
      number: "4328974539"
    },
    {
      id: 2,
      name: 'Ada Loverball', 
      number: "78656455676"
    },
    {
      id: 3,
      name: 'Dan Abramoy', 
      number: "7643657385"
    },
    {
      id: 4,
      name: 'Dai Daisy', 
      number: "3213563456"
    },
    {
      id: 5,
      name: 'Ma Yutao', 
      number: "2345678213"
    }
  ]

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNumbers(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length +1,
      phoneNumber : numbers
    }
 
    for(let i = 0; i < persons.length; i++){
      if(newName === persons[i].content){
        window.alert(newName + ' is already added to phonebook')
        setPersons(persons)
      }else {
        setPersons(persons.concat(nameObject))
        setNumbers(numbers.concat(nameObject))
      }
    }
    setNewName('')
    setNumbers('')
    persons.map(person => 
      <Person key={person.content} person={person}/>
    )
  }

  const printPerson = () => {
    for(let i=0; i < persons.length; i++){
      console.log(persons[i].content +' '+ persons[i].phoneNumber)
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
                value={newName}
                onChange={handleNameChange} />
        </div>
        <div>
          number: <input value ={numbers} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit' onClick={addPerson} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {Phonebook[0].name} {Phonebook[0].number}</ul>
        
        <ul>
          {Phonebook[1].name} {Phonebook[1].number}</ul>
        <ul>
        {Phonebook[2].name} {Phonebook[2].number}</ul>
        <ul>
        {Phonebook[3].name} {Phonebook[3].number}</ul>
        <ul>
        {Phonebook[4].name} {Phonebook[4].number}</ul>
        
        <div>
        <button type='submit' onClick={printPerson} >Print User information to console</button>
        </div>
         
    </div>
  );
}
export default App