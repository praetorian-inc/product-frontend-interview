import './App.css';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadAllVulnerabilities, selectAllVulnerabilities } from './redux/vulnerability';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllVulnerabilities());
  }, [dispatch]);

  const allVulnerabilities = useSelector(selectAllVulnerabilities);

  return (
    <div className="App">
      <p>
        {allVulnerabilities}
      </p>
    </div>
  );
}

export default App;
