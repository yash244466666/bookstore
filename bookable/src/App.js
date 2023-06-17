import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Books from './components/books';

const API_URL = "http://127.0.0.1:3000/api/v1/books";

function getApiData() {
  return axios.get(API_URL).then(response => response.data);
}

function App() {

  const [books, setBoooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApiData().then((items) => {
      if (mounted) {
        setBoooks(items);
      }
    });
    return () => (mounted = false);
  }, []);


  return (
    <div className="App">
      <h1>My React App</h1>
      <Books books={books} />

    </div>
  );
}

export default App;
