
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './pages/index/Index';
import { Detail } from './pages/detail/Detail';

function App() {
  return (
    <>
      <header>
        <a href='/'>
            <h1>SHARETRADE.com</h1>
        </a>
        
      </header>
      
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/articles/:id' element={<Detail />} />
      </Routes>
      
      
    </>
  );
}

export default App;
