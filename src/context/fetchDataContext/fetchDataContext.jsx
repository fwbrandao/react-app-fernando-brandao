import React, { useState, useEffect } from 'react';

export const FetchDataContext = React.createContext(() => { });

const FetchDataProvider = (props) => {
  const [smallData, setSmallData] = useState([]);
  const [mediumData, setMediumData] = useState([]);
  const [largeData, setLargeData] = useState([]);
  let allData = [];


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

  // Concat all datasets
  allData = [...smallData, ...mediumData, ...largeData];

  // Filter transactions from unique user
  const getUniqueUserData = (id) => {
    const newData = smallData.filter(data => data.user_id === id)
    return newData;
  }

  // TODO - verify if ids and timestumps are the same for 2 diferent transactions
  // const uniqueUsersIds = smallData
  //   .map(e => e['user_id'])
  //   .map((e, i, final) => final.indexOf(e) === i && i)
  //   .filter(obj => smallData[obj])
  //   .map(e => smallData[e]);

  // const duplicateUsersIds = smallData
  //   .map(e => e['user_id'])
  //   .map((e, i, final) => final.indexOf(e) !== i && i)
  //   .filter(obj => smallData[obj])
  //   .map(e => smallData[e]["user_id"]);

  // const duplicateTimestamps = allData
  //   .map(e => e['timestamp'])
  //   .map((e, i, final) => final.indexOf(e) !== i && i)
  //   .filter(obj => allData[obj])
  //   .map(e => allData[e]["timestamp"]);

  return (
    <FetchDataContext.Provider value={{ allData, getUniqueUserData }}>
      {props.children}
    </FetchDataContext.Provider>
  );
}

export default FetchDataProvider;