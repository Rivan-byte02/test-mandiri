import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './view/Home';
import CoinList from './view/CoinList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin-list' element={<CoinList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
