import './App.css';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadAllVulnerabilities, selectAllVulnerabilities } from './redux/vulnerability';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllVulnerabilities());
  }, [dispatch]);

  const allVulnerabilities = useSelector(selectAllVulnerabilities);

  console.log(allVulnerabilities);

  return (
    <div className="App">
      {!!allVulnerabilities ? allVulnerabilities.map(vulnerability =>
        <p>
          {vulnerability.title}
        </p>
      ) : null}
      <p>
        "Hello"
      </p>
    </div>
  );
}

export default App;
