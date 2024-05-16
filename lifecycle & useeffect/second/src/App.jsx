import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer fired!');
    }, 1000);


    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Document scrolled!');
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return <div>Check console for logs</div>;
};

export default App;
