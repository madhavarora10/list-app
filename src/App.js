import { useEffect, useState } from 'react';
import './App.css';
import Row from './features/Row'


function App() {
  const [Data, setData] = useState([]);
  
  const fetchDataHandler = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    fetchDataHandler();
  }, [])
  return (
    <div className="App">
       <Row dataObjects={Data}></Row>
    </div>
  );
}

export default App;
