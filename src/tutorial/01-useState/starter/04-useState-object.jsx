import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'perter',
    age: 24,
    hobby: 'read books'
  })

  const displayPerson = () => {
    // overwrite all elements
    setPerson({ name: 'john', age: 28, hobby: 'coding' })
    // overwrite only name
    // setPerson({ ...person, name: 'john' })

  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button type='button' className='btn' onClick={displayPerson}>
        show John
      </button>
    </div>
  );
};

export default UseStateObject;
