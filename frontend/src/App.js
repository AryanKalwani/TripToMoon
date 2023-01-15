import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import Home from './components/Home';

function App() {
  const connect = ()=>{
    alert('connect');
  }
  return (
    <>
    <Routes>
      <Route path='/tolist' element={<TodoList />} />
      <Route path="/" element={<Home />} />
    </Routes>
     
    </>
     
  );
}

export default App;
