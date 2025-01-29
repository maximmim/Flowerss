import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
function Navigatosr() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/buy' element={<Home />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigatosr;
