import './App.css';

import React, { useState, useEffect } from 'react';
import { getAllVulnerabilities } from "./service"


function App() {

  const [allVulnerabilities, setAllVulnerabilities] = useState([]);

  useEffect(() => {
    setAllVulnerabilities(getAllVulnerabilities());
  }, []);

  console.log(allVulnerabilities);

  return (
    <div className="App">
      <p>
        {allVulnerabilities}
      </p>
    </div>
  );
}

export default App;
