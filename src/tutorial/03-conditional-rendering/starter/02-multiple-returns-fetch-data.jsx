import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>;
  }

  if(isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <h1>Fetch Data</h1>
      <ul>
        <li key={user.id}>
          <img src={user.avatar_url} alt={user.login} style={{ width: '150px', borderRadius: '25px' }} />
          <h2>{user.login}</h2>
          <h3>Works At {user.company}</h3>
          <p>{user.bio}</p>
        </li>
      </ul>
    </div>
  );
};
export default MultipleReturnsFetchData;
