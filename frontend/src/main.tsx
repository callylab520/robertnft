import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { Ethereum, Binance } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet()
      ]}
      supportedChains={[Ethereum, Binance]}
      activeChain="binance"
      signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
