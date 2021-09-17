import React, { useState, useEffect } from 'react';

export const FetchDataContext = React.createContext(() => { });

const FetchDataProvider = (props) => {
  const [smallData, setSmallData] = useState([]);
  const [mediumData, setMediumData] = useState([]);
  const [largeData, setLargeData] = useState([]);
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/transactions-small.json") // Fetch small dataset
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSmallData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/transactions-medium.json") // Fetch medium dataset
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMediumData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/transactions-large.json") // Fetch large dataset
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLargeData(data);
      });
  }, []);

    

  return (
    <FetchDataContext.Provider value={{ smallData, mediumData, largeData, allData }}>
      {props.children}
    </FetchDataContext.Provider>
  );
}

export default FetchDataProvider;