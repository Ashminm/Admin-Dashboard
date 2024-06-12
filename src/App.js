import { Routes,Route } from 'react-router-dom';
import './App.css';
import Allproduct from './Pages/Allproduct';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' Component={<Allproduct/>} />
          <Route path='/dash' Component={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
