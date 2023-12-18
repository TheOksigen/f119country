import React, { createContext, useEffect, useState } from 'react';

const Olkeler = createContext();

function DataContex({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
    <Olkeler.Provider value={data}>
      {children}
    </Olkeler.Provider>
  );
}

export default DataContex;
export { Olkeler };
