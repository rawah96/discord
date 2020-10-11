import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  useEffect(() => {
    const fetchUrl = () => {
      const api_key = "ccb4efa76c26a38b49906fe799ed6f11";
      fetch('')
      .then(res => res.json())
      .then(data => {console.log(data)});
    }

    fetchUrl();
  }, [])
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
