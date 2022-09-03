import {HashRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Button from './component/Button';
// import Nav from './component/Nav';
import Signup from './component/Signup';
import Login from './component/Login';
import Buy from './component/Buy'
import Movies from './component/Movies';
import SingleMovie from './component/SingleMovie';


function App() {
  return (
    <HashRouter>
    {/* <Nav/> */}
   
    <Routes>
<Route path='/' element={<Button/>}/>
<Route   path='/img' element={<Buy/>}/>
<Route   path='/SIGNIN' element={<Signup/>}/>
<Route   path='/LOGIN' element={<Login/>}/>
<Route  path='/movies' element={<Movies/>}/>
<Route  path='/movies/:id' element={<SingleMovie/>}/>




    </Routes>
    </HashRouter>
  );
}

export default App;
