import { Routes,Route } from 'react-router-dom';
import './App.css';
import Allproduct from './Pages/Allproduct';
import Dashboard from './Pages/Dashboard';
import Landing from './Pages/Landing';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/product' element={<Allproduct/>} />
          <Route path='/dash' element={<Dashboard/>} />
          <Route path='/add' element={<Addproduct/>} />
          <Route path='/edit/:id' element={<Editproduct/>} />
          <Route path='/*' element={<Allproduct/>} />
      </Routes>
    </div>
  );
}

export default App;
