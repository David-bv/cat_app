import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import IndexCat from '../components/IndexCat';
import Inicio from '../components/Inicio';
import '../styles/App.css';

function AppRouter() {
  return (
    <div className='App' >
        <Router>
            <Routes >
                <Route path="/*" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/IndexCat" element={<IndexCat />} />
            </Routes>
        </Router>
    </div>
  );
}

export default AppRouter;
