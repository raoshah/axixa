import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Home from './Home';
import Airtel from './Airtel';
import Products from './productDisplay/Index.js';
import Login from './Login';
import Navbar from './Navbar';


function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/airtel' element={<Airtel/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
