import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Categories/>} path="/categories"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Cart/>} path="/cart"/>
        <Route element={<Login/>} path="/"/>
      </Routes>
     
      
    </div>
  );
}

export default App;
