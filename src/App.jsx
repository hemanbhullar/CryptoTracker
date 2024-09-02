import { useState } from 'react';
import './App.css'
import { CurrencyContext } from '../src/Context/CurrencyContext';
import Routing from './Components/Routing/Routing';

function App() {
  const [currency, setCurrency] = useState('usd');

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Routing />
      </CurrencyContext.Provider>
    </>
  )
}

export default App
