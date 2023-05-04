const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed.binance.org`),
      network_id: 56,
      gas: 7900000,          // Gas sent with each transaction (default: ~6700000)
      gasPrice: 5000000000,  // 5 gwei (in wei) (default: 100 gwei)
      confirmations: 2,
      timeoutBlocks: 200,
      networkCheckTimeout: 10000,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        // evmVersion: "byzantium"
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    bscscan: process.env.BSCSCAN_API
  }
};
