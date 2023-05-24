import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const [name, setName] = useState('');

  const login = () => {
    setUser(name);
  }

  const logout = () => {
    setName('');
    setUser(null);
  }

  return (
    <div>
      <h1>{user ?  `Hello ${user}` : 'Welcome'}</h1>
      {user && <button onClick={logout}>Logout</button>}
      {!user && <div>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <button type="button" onClick={login}>Login</button>
        </div>}
    </div>
  );
};

export default UserChallenge;
