import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Manage } from './components/Manage';
import { Edit } from './components/Edit';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/manage' element={<Manage/>}></Route>
          <Route path='/manage' element={<Manage/>}></Route>
          <Route path='/edit/:editId' element={<Edit/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
