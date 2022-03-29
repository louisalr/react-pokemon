import './App.css';
import Navigation from './components/Navbar/Navigation';

import './css/bootstrap.min.css'

import {Route, Routes} from 'react-router-dom'

import Home from ".//components/Home/Home";
import Post from ".//components/Post/Post";
import Search from ".//components/Search/Search";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/chercher' element={<Search/>} />
        <Route exact path='/poster' element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
