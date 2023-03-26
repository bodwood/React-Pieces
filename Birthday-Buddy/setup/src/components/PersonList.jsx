import Person from './Person';

const PersonList = ({ person, deletePerson }) => {
 
  return (
    <div>
      {person.map(({ id, name, age, image }) => {
        return (
          <div key={id}>
            <Person id={id} name={name} age={age} image={image} deletePerson={deletePerson}/>
            
          </div>
        );
      })}
    </div>
  );
};
export default PersonList;
