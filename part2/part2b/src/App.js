import React from 'react';
import { useState } from 'react';
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([{ 
    name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length +1,
    }
 
    for(let i = 0; i < persons.length; i++){
      if(newName === persons[i].content){
        window.alert(newName + ' is already added to phonebook')
        //setPersons(persons)
      }else {
        setPersons(persons.concat(nameObject))
      }
    }
    setNewName('')
    
    
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
          <button type='submit' onClick={addName} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.content} person={person} />
        )}
      </ul>
      
    </div>
  );
}
export default App