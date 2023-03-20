require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const web3 = require('web3');
// require("./tasks")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const accounts = [process.env.PRIVATE_KEY];

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    // console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more




module.exports = {
  solidity: {
    version: "0.8.7", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygonMain: {
      url: process.env.POLYGONMATIC,
      accounts
    },
    fantomTest: {
      url: 'https://rpc.ankr.com/fantom_testnet',
      accounts
    },
    fantomMain: {
      url: 'https://endpoints.omniatech.io/v1/fantom/mainnet/public',
      accounts
    },
    polygon: {
      url: process.env.MATIC_LINK,
      accounts
    },
    scrollTest: {
      url: 'https://alpha-rpc.scroll.io/l2',
      accounts
    },
    filwallaby: {
      url: "https://wallaby.node.glif.io/rpc/v0",
      accounts
    },
    taiko: {
      url: "https://l2rpc.hackathon.taiko.xyz",
      accounts
    },
    zkpolygon: {
      url: "https://rpc.public.zkevm-test.net",
      accounts
    },
    gnosis_chain: {
      url: 'https://rpc.gnosischain.com',
      accounts
    },
    // rinkeby: {
    //     url: process.env.RINK_LINK,
    //     accounts: [process.env.RINKEBY_KEY]
    // },
    optimism_test: {
      url: "https://goerli.optimism.io",
      accounts
    },
    optimism_main: {
      url: process.env.OPTIMISM_MAINNET || "https://mainnet.optimism.io",
      accounts
    },
    cronos_test: {
      url: "https://evm-t3.cronos.org",
      accounts
    },
    aurora_test: {
      url: 'https://testnet.aurora.dev',
      accounts
    },
    oasis_test: {
      url: "https://testnet.emerald.oasis.dev",
      accounts
    }
  }
};
