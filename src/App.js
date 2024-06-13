import { Routes,Route } from 'react-router-dom';
import './App.css';
import Allproduct from './Pages/Allproduct';
import Dashboard from './Pages/Dashboard';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/product' element={<Allproduct/>} />
          <Route path='/dash' element={<Dashboard/>} />
          <Route path='/*' element={<Allproduct/>} />
      </Routes>
    </div>
  );
}

export default App;
