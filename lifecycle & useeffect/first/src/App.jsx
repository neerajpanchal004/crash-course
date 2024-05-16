import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));


      const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);


    document.title = `Count: ${count}`;

    return () => {

      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count]); 

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
