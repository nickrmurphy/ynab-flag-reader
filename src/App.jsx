import './App.css';
import Home from './pages/Home';
import Budget from './pages/Budget';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget/:budgetId" element={<Budget />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
