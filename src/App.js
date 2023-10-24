import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Hostellers from './Pages/Hostellers';
import Employees from './Pages/Employees';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
     <div className='hd'> <Header/></div>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/hostellers' element={<Hostellers/>} />
      <Route path='/employees' element={<Employees/>} />

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
