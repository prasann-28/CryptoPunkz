import './App.css';
import CollectionCard from './components/CollectionCard';
import PunkList from './components/PunkList'
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xd9780c52dd0c88Ef43841Bef36A4b4D7370d7057&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    

return getNfts()
    
  }, [])

  return (
    <div className="app">
    <Header/>
    {punkListData.length > 0 && (
      <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}></PunkList>      </>
    )}
    </div>

  );
}


export default App;
