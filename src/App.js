
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Index } from './pages/index/Index';
import { Detail } from './pages/detail/Detail';

function App() {
  const navigate = useNavigate();
  const backNews = () => {
      navigate('/')
  }

  return (
    <>
      <header> 
            <h1 onClick={backNews}>SHARETRADE.com</h1>
      </header>
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/articles/:id' element={<Detail />} />
      </Routes>
      
      
    </>
  );
}

export default App;
