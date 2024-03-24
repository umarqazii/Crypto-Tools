import react from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LivePrices from './components/LivePrices.js';
import Home from './components/Home.js';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liveprices" element={<LivePrices />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
