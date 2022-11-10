import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
