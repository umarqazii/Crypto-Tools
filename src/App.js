import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Define the state to store the latest price
  const [btcprice, setbtcPrice] = useState(null);
  const [ethprice, setethPrice] = useState(null);
  
  useEffect(() => {
    const btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    const eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');

    btc.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setbtcPrice(data.p);
    };

    eth.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setethPrice(data.p);
    }

    // Cleanup function
    return () => {
      btc.close();
      eth.close();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Realtime Prices</h1>
        <span>Bitcoin:<p>{btcprice !== null ? `$${btcprice}` : 'Loading...'}</p></span>
        <span>Ethereum:</span><p>{ethprice !== null ? `$${ethprice}` : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
