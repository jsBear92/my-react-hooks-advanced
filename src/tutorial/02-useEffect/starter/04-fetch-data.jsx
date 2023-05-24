import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url)
        const users = await res.json();
        setUsers(users);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, [])

  return (
    <div>
      <h2>Fetch Data Example</h2>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login}/>
              <div>
                <h5>{user.login}</h5>
                <a href={user.url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchData;
