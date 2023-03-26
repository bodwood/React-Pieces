import data from './data';
import { useState } from 'react';
import PersonList from './components/PersonList';
import Person from './components/Person';

const App = () => {
  const [person, setPerson] = useState(data);

  const deletePerson = (id) => {
    const newArray = person.filter((person) => person.id !== id);
    setPerson(newArray);
    return;
  };

  return (
    <article>
      <h1>{person.length}</h1>
      <PersonList person={person} deletePerson={deletePerson}/>
    </article>
  );
};
export default App;
