config = {
  graphEndpoint:
    "https://api.thegraph.com/subgraphs/name/float-capital/float-capital-avalanche",
  priceHistoryGraphEndpoint:
    "https://api.thegraph.com/subgraphs/name/float-capital/dev-graph-five",
  graphPrefix: "ava",
  networkId: 43114,
  networkName: "Avalanche",
  networkCurrencySymbol: "AVAX",
  rpcEndpoint: "https://api.avax.network/ext/bc/C/rpc",
  blockExplorer: "https://snowtrace.io/",
  bridgeLink: "https://bridge.avax.network/",
  contracts: {
    longShort: {
      address: "0x0db3c59c187ecfa36a9C9f6CFa3664D06c2B5556",
      description: "Executes market rebalance, governs entry and exit into markets, and performs next price execution.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/longShort/LongShortAvalanche.sol",
    },
    staker: {
      address: "0xD2EEAafF35281757F87e4d535763c3d4c35b62C1",
      description: "Holds synthetic tokens that have been staked.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/staker/StakerAvalanche.sol",
    },
    stakeBalance: {
      address: "0x1679e32066Ec9B60a4f584f98B2a7EA05e0C0D93",
      description: "Temporary contract that has single function 'userAmountStaked' which adds the users confirmed but not settled stakes to their regular stake balance given by the staker contract.",
    },
    tokenFactory: {
      address: "0x4B9bd38593A26325218A16805C9D6D3651D9E8d0",
      description: "Contract is used to reliably mint the synthetic tokens used by the float protocol.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/TokenFactory.sol",
    },
    floatToken: {
      address: "0x9fB133B2C5218D7DDb97422aa27c0eD04122c944",
      symbol: "aFLT",
      iconUrl:
        "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/alpha-float-token.svg",
    },
    floatCapital_v0: {
      address: "0x865C1a2388E0E9C2D9b347D8DcAc617E056D16d9",
      description: "A percentage of float token to accrue here for project development.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/FloatCapital_v0.sol",
    },
    treasury_v0: {
      address: "0x4e813624E1E0906e23fa22E2d120b4c4e2F89E4e",
      description: "Allows the burning of FLT tokens for a proportional share of the value held in the treasury.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/Treasury_v0.sol",
    },
    gems: {
      address: "0xB779a4A28012e12Ff904754bBE72F60423AF0A28",
      description: "Contract giving user GEMS, inspired by https://github.com/andrecronje/rarity/blob/main/rarity.sol",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/GEMS.sol",
    },
    gemCollectorNft: {
      address: "0xEB73D5CbB26536F714785B7864806542f41ab9E5",
      description: "NFTs for users who have accrued enough GEMS, a new NFT for each level of GEM accrual.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/GemCollectorNFT.sol",
    },
  },
  markets: [
    {
      index: 1,
      name: "Avalanche",
      description:
        "Avax is the main token of the Avalanche blockchain and acts as the primary 'fuel' that powers all activity on it. Avax is used to perform actions on the network, such as sending transactions and interacting with dapps.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/avax/avax.png",
      leverage: 2,
      paymentToken: {
        address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2AVAX",
      plannedLaunchTimestamp: 1639490400,
      actualLaunchTimestamp: 1638805641,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x621cda10820555adAe8506eeC296cB9621E491Ff",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0xE22268dB718912dc6A73106dd4ABf34080b1C4e1",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        address: "0xa43a73f17ECde987A9127A5cBE46B7923F351c32",
        symbol: "flAvax2",
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/avax/avax_long.png",
      },
      shortToken: {
        address: "0xdC883B026F78FF494199778001b23f38edA89d6d",
        symbol: "fsAvax2",
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/avax/avax_short.png",
      },
    },
    {
      index: 2,
      name: "JOE",
      description:
        "JOE is a governance token that rewards its holders with a share of exchange revenues from the Trader Joe protocol. Trader Joe is a one-stop decentralized trading platform on the Avalanche network.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/joe/joe.png",
      leverage: 2,
      paymentToken: {
        address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2JOE",
      plannedLaunchTimestamp: 1639663200,
      actualLaunchTimestamp: 1639643931,
      yieldManager: {
        providerType: "JOE",
        contract: {
          address: "0x47a21F14794b6229cc2a1ddfe4498C9e48f1C16c",
          description: "Aave-based yield manager that uses JOE as backend instead of Aave.",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0xEc120de9fFaE289f5b383ffb582F3cC1F449E3aa",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/joe/joe_long.png",
        address: "0x6A621D256CFEDa1c10ab0Cbd1Ff8d5310b35e4d3",
        symbol: "fl2JOE",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/joe/joe_short.png",
        address: "0x1dCAA44bEA82bd135C51b158E5E702e3C1843951",
        symbol: "fs2JOE",
      },
    },
    {
      index: 3,
      name: "QI",
      description:
        "QI is the governance token for BENQI, Avalanche's leading liquidity protocol. QI is earned as a reward for supplying liquidity in BENQI, and can be supplied in their protocol for a tasty APY.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/qi/qi.png",
      leverage: 2,
      paymentToken: {
        address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2QI",
      plannedLaunchTimestamp: 1642514400,
      actualLaunchTimestamp: 1642511122,
      yieldManager: {
        providerType: "BENQI",
        contract: {
          address: "0xEb2A90ED68017Ac1B068077C5D1537f4C544036C",
          description: "Compound-based yield manager that uses QI as yield provider instead of Compound.",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/DefaultYieldManagerCompound.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x9341437bbb9c7C0Ed5DcaDA60886780aB3C81524",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/qi/qi_long.png",
        address: "0xE11c7a822547ba1910a5932472BF3ebFbB6b3C29",
        symbol: "fl2QI",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/qi/qi_short.png",
        address: "0x07897e6Fbfb0C05821D6816E2c7e632251b4C23a",
        symbol: "fs2QI",
      },
    },
    {
      index: 4,
      name: "Spell",
      description:
        "SPELL is the governance token for Abracadabra, Avalanche's leading stablecoin protocol. SPELL can be used as a governance token for protocol improvements as well as a token that you can stake to earn protocol fees.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/spell.svg",
      leverage: 2,
      paymentToken: {
        address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2SPELL",
      plannedLaunchTimestamp: 1643896800, // Thu Feb 03 2022 14:00:00 GMT+0000
      actualLaunchTimestamp: 1643870947, // Thu Feb 03 2022 06:49:07 GMT+0000
      yieldManager: {
        providerType: "BENQI",
        contract: {
          address: "0xcD62196CC117EA7fd9525ADe37e44d01209e8EBB",
          description: "Compound-based yield manager that uses QI as yield provider instead of Compound.",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/DefaultYieldManagerCompound.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0xD1d169B5898b142EBbEbc3E94Cfa7E05C84e957b",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/spell_long.svg",
        address: "0x9D11384E518e25184A6DDe0f54E5b141A1441F65",
        symbol: "fl2SPELL",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/spell_short.svg",
        address: "0x36a4C537ef66429624537070E30dbc2C53e3B941",
        symbol: "fs2SPELL",
      },
    },
  ],
};

module.exports = { config }
