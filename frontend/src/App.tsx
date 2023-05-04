import './App.css'

import { Web3Button } from "@thirdweb-dev/react";
import { abi } from './abi';

function App() {

  return (
    <>
      <Web3Button
        contractAddress="0x75391F8df44F766fE5a689599dE54c8E03200374" // Your smart contract address
        contractAbi={abi}
        action={(contract) => contract.call("mint")}
      >Mint</Web3Button>
    </>
  )
}

export default App
