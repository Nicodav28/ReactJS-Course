import { useState } from "react";
import { useFetch } from './hooks/useFetch';

const App = () => {
  const [count, setCount] = useState(0);
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

  if (error) return <p>{ error }</p>;
  return loading ? <p>Cargando...</p> : (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <ul>
        {
          data.map(user => (
            <li key={user.id}>{ user.name }</li>
          ))
        }
      </ul>
    </>
  );
};

export default App;
