import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const LivePrices = () => {
    // Define the state to store the latest price
  const [btcprice, setbtcPrice] = useState(null);
  const [ethprice, setethPrice] = useState(null);
  const [adaPrice, setadaPrice] = useState(null);
  const [nearPrice, setnearPrice] = useState(null);
  const [hbarPrice, sethbarPrice] = useState(null);
  const [egldPrice, setegldPrice] = useState(null);
  const [atomPrice, setatomPrice] = useState(null);
  const [kdaPrice, setkdaPrice] = useState(null);
  const [icpPrice, seticpPrice] = useState(null);
  const [maticPrice, setmaticPrice] = useState(null);
  const [fetPrice, setfetPrice] = useState(null);
  
  
  useEffect(() => {
    const btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    const eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    const ada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
    const near = new WebSocket('wss://stream.binance.com:9443/ws/nearusdt@trade');
    const hbar = new WebSocket('wss://stream.binance.com:9443/ws/hbarusdt@trade');
    const egld = new WebSocket('wss://stream.binance.com:9443/ws/egldusdt@trade');
    const atom = new WebSocket('wss://stream.binance.com:9443/ws/atomusdt@trade');
    const kda = new WebSocket('wss://stream.binance.com:9443/ws/kdausdt@trade');
    const icp = new WebSocket('wss://stream.binance.com:9443/ws/icpusdt@trade');
    const matic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
    const fet = new WebSocket('wss://stream.binance.com:9443/ws/fetusdt@trade');


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

    ada.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setadaPrice(data.p);
    }

    near.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setnearPrice(data.p);
    }

    hbar.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      sethbarPrice(data.p);
    }

    egld.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setegldPrice(data.p);
    }

    atom.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setatomPrice(data.p);
    }

    kda.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setkdaPrice(data.p);
    }

    icp.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      seticpPrice(data.p);
    }

    matic.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setmaticPrice(data.p);
    }

    fet.onmessage = (event) => {
      // Extract the price from the incoming message and update the state
      const data = JSON.parse(event.data);
      setfetPrice(data.p);
    }

    // Cleanup function
    return () => {
      btc.close();
      eth.close();
      ada.close();
      near.close();
      hbar.close();
      egld.close();
      atom.close();
      kda.close();
      icp.close();
      matic.close();
      fet.close();
    };
  }, []);

  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <h1>Live Prices</h1>
        <p>Bitcoin: {btcprice !== null ? `$${btcprice}` : 'Loading...'}</p>
        <p>Ethereum: {ethprice !== null ? `$${ethprice}` : 'Loading...'}</p>
        <p>Cardano: {adaPrice !== null ? `$${adaPrice}` : 'Loading...'}</p>
        <p>Near: {nearPrice !== null ? `$${nearPrice}` : 'Loading...'}</p>
        <p>Hedera: {hbarPrice !== null ? `$${hbarPrice}` : 'Loading...'}</p>
        <p>Elrond: {egldPrice !== null ? `$${egldPrice}` : 'Loading...'}</p>
        <p>Cosmos: {atomPrice !== null ? `$${atomPrice}` : 'Loading...'}</p>
        <p>Kadena: {kdaPrice !== null ? `$${kdaPrice}` : 'Loading...'}</p>
        <p>ICP: {icpPrice !== null ? `$${icpPrice}` : 'Loading...'}</p>
        <p>Matic: {maticPrice !== null ? `$${maticPrice}` : 'Loading...'}</p>
        <p>Fetch AI: {fetPrice !== null ? `$${fetPrice}` : 'Loading...'}</p>
      </header>
    </div>
  );
};

export default LivePrices;
