import { data } from '../../../data';

import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUsers([...users, { id: Date.now(), name }])
    setName('');
  }

  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <h4 style={{ display: 'inline-block' }}>{user.name}</h4>
              <button type='button' className='btn' onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
