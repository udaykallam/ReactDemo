import { Route,Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index.js';
import Login from './components/Login.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
