import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'deafult value'}</h2>
      {name && <div>
        <h2>wow</h2>
        </div>}
    </div>
  );
};

export default ShortCircuitExamples;
