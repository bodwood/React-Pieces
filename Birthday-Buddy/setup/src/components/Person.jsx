const Person = ({id, name, age, image, deletePerson}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <img src={image} alt={name} />
      <button className='btn' onClick={() => deletePerson(id)}>
        Delete {name}
      </button>
    </div>
  );
}
export default Person