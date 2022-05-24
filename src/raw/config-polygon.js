config = {
  graphEndpoint:
    "https://api.thegraph.com/subgraphs/name/float-capital/float-capital-alpha",
  priceHistoryGraphEndpoint:
    "https://api.thegraph.com/subgraphs/name/float-capital/alpha-price-history",
  networkId: 137,
  networkName: "Polygon",
  networkCurrencySymbol: "MATIC",
  rpcEndpoint: "https://polygon-rpc.com",
  blockExplorer: "https://polygonscan.com/",
  bridgeLink: "https://wallet.polygon.technology/bridge",
  contracts: {
    longShort: {
      address: "0x168a5d1217AEcd258b03018d5bF1A1677A07b733",
      description: "Executes market rebalance, governs entry and exit into markets, and performs next price execution.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/longShort/LongShortAvalanche.sol",
    },
    staker: {
      address: "0xe7C89eb987c415B4233789E5ceC0eE7407d2C47F",
      description: "Holds synthetic tokens that have been staked.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/staker/StakerAvalanche.sol",
    },
    stakeBalance: {
      address: "0x80E5992CA952990c63A265f4132d1eF242892840",
      description: "Temporary contract that has single function 'userAmountStaked' which adds the users confirmed but not settled stakes to their regular stake balance given by the staker contract.",
    },
    tokenFactory: {
      address: "0x809C2619a27c58334CAac07470899e4dd0574AEC",
      description: "Contract is used to reliably mint the synthetic tokens used by the float protocol.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/TokenFactory.sol",
    },
    floatToken: {
      address: "0x01309A1Ec476871760D9Ea454628500BCcc1E011",
      symbol: "aFLT",
      iconUrl:
        "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/alpha-float-token.svg",
    },
    floatCapital_v0: {
      address: "0xEe0c19f26b3B3A4fb82f466a6023DcD979c27a2F",
      description: "A percentage of float token to accrue here for project development.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/FloatCapital_v0.sol",
    },
    treasury_v0: {
      address: "0xeb1bB399997463d8Fd0cb85C89Da0fc958006441",
      description: "Allows the burning of FLT tokens for a proportional share of the value held in the treasury.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/Treasury_v0.sol",
    },
    gems: {
      address: "0x756218A9476bF7C75a887d9c7aB916DE15AB5Ddf",
      description: "Contract giving user GEMS, inspired by https://github.com/andrecronje/rarity/blob/main/rarity.sol",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/GEMS.sol",
    },
    gemCollectorNft: {
      address: "0x220e474CF38D6001727Efff4fC57F8821a55FaFF",
      description: "NFTs for users who have accrued enough GEMS, a new NFT for each level of GEM accrual.",
      codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/GemCollectorNFT.sol",
    },
  },
  hiddenMarkets: [3, 7],
  markets: [
    {
      index: 1,
      name: "The Flipp3ning",
      description:
        "The Flipp3ning represents a 3x leveraged version of the Flippening, ratio of the ETH to BTC market cap. Enter a long position to gain exposure to ETH increasing in value in relation to BTC or a short position to gain exposure to BTC increasing in value in relation to ETH.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/flippening/flipp3ning.svg",
      leverage: 3,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "%",
      isUnitSuffix: true,
      symbol: "F3",
      createdTimestamp: 1631534949,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0xce5da4bebBA980BeC39da5b118750A47a23D4B85",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x70a760ACD5503A8D6746BC7F00571F570ae0aD44",
          description: "Chainlink-based oracle manager, combining 2 data feeds into 1",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerFlipp3ning.sol",
        },
      },
      longToken: {
        address: "0xb10ffc060cc7659f0726c8452a586e30338145cf",
        symbol: "flF3",
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/flippening/flipp3ning_long.svg",
      },
      shortToken: {
        address: "0x7AD3a979D45E1636558A5c3d8BD8a4dA4cB30349",
        symbol: "fsAvax2",
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/flippening/flipp3ning_short.svg",
      },
    },
    {
      index: 2,
      name: "3TH",
      description:
        "The 3TH market is market for Ether (ETH) with 3x leverage on the underlying price feed. If you feel 3x leverage is too aggressive for you, you can dampen that leverage by going in on both sides of the market.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/joe/joe.png",
      leverage: 3,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "3TH",
      createdTimestamp: 1633089246,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x595b1408C9c2BF121c7674E270Ca7aCc0bBf100C",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x063fD075441De59ccf0d941fa0500CB0B95Db0c6",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/eth/3th_long.svg",
        address: "0x5bF9dFB1B27c28e5a1D8e5c5385A1A353eC9D118",
        symbol: "fl3TH",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/eth/3th_short.svg",
        address: "0x97B0Ba4a8Ba02B8d002C156a7BEdBF5264CC0f7A",
        symbol: "fs3TH",
      },
    },
    {
      index: 3,
      name: "2-OHMv1",
      description:
        "OHM v1 IS DEPRICATED, please visit OHMv2 to mint a position",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm.svg",
      leverage: 2,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2OHM",
      createdTimestamp: 1635775156,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x694c240e63CF60a2cD2d38d84D902744640AcCDA",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x44F768829a4323781E4199AcB81E4bD7E63ADcd6",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm_long.svg",
        address: "0x6735fdd28c71d17C9a26F1cbf0082358Bfb622Ad",
        symbol: "fl2OHM",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm_short.svg",
        address: "0x16dcb8d591Bc82f1f2AB33d420B735c60fBc0Be5",
        symbol: "fs2OHM",
      },
    },
    {
      index: 4,
      name: "2-AXS",
      description:
        "The 2-AXS is a 2x leveraged AXS market. AXS, or Axie Infinity Shards, are the governance tokens for metaverse game Axie Infinity",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/axs/axs.png",
      leverage: 2,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2AXS",
      createdTimestamp: 1639483202,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x92f29DfceA469ab498ade826FB41d065482B6abA",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x694c240e63CF60a2cD2d38d84D902744640AcCDA",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/axs/axs_long.png",
        address: "0xfb4449b3a2F86B4A99907855Ed6ce4dDC8Cf8247",
        symbol: "fl2AXS",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/axs/axs_short.png",
        address: "0x3Cb62c423AF4C56f4F47B4565e423Da5592b68cD",
        symbol: "fs2AXS",
      },
    },
    {
      index: 5,
      name: "Crypto Volatility Index",
      description:
        "The 2CVI market is a 2x leveraged Crypto Volatility Index market. The Crypto Volatility Index (CVI) is a decentralized VIX for crypto that allows users to hedge themselves against market volatility and impermanent loss.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/cvi/cvi.png",
      leverage: 2,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2CDI",
      createdTimestamp: 1640251504,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0xB26289Bee42Aa1ad51466dc28e68ab89f0541A7f",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x4533E90F4FE097B406257fC8Ea041c57aD2e5358",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/cvi/cvi_long.png",
        address: "0xf17cef41655c7aa2987ef5973ea816f0b7db2735",
        symbol: "fl2CDI",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/cvi/cvi_short.png",
        address: "0x67c349467d639a9e0822c079aee8df9964308bc9",
        symbol: "fs2CDI",
      },
    },
    {
      index: 6,
      name: "LINK 2x",
      description:
        "The 2LINK market is a 2x leveraged magic internet asset for the LINK token. LINK is the governance token for Chainlink, the decentralised oracle network. Get long or short exposure to LINK while earning aFLT rewards.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/link/link.png",
      leverage: 2,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2LINK",
      plannedLaunchTimestamp: 1641909600,
      createdTimestamp: 1641900738,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x1372276638bFc1FCe909B05783D91e526B801669",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0xaEDADFA7027Eb38749096CC63fA2BFC2b1cF180f",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/link/link_long.png",
        address: "0x5add940afd2077c7332205d971bdb7efda0b1a95",
        symbol: "fl2LINK",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/link/link_short.png",
        address: "0xa5f32126b7f0c893c32caebf76faab7fac2b1336",
        symbol: "fs2LINK",
      },
    },
    {
      index: 8,
      name: "2-OHMv2",
      description:
        "The 2-OHM v2 market is market for OHM from Olympus DAO leverage on the underlying price feed. If you feel 2x leverage is too aggressive for you, you can dampen that leverage by going in on both sides of the market.",
      iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm_long.svg",
      leverage: 2,
      paymentToken: {
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        isUSDBased: true,
        decimals: 18,
        symbol: "DAI",
        iconUrl: "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/icons/tokens/dai.svg",
      },
      unitOfMeasure: "$",
      isUnitSuffix: false,
      symbol: "2OHMv2",
      createdTimestamp: 1642110514,
      yieldManager: {
        providerType: "AAVE",
        contract: {
          address: "0x1372276638bFc1FCe909B05783D91e526B801669",
          description: "Aave-based yield manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/YieldManagers/YieldManagerAaveBasic.sol",
        },
      },
      oracleManager: {
        providerType: "CHAINLINK",
        contract: {
          address: "0x4518502fcD88E7d39AD650E0290a8113Baab3077",
          description: "Chainlink-based oracle manager",
          codeUrl: "https://github.com/Float-Capital/contracts/blob/master/contracts/oracles/OracleManagerChainlink.sol",
        },
      },
      longToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm_long.svg",
        address: "0x1545747ab2255b065fb0c0badbb80e80bc2d93ce",
        symbol: "fl2OHMv2",
      },
      shortToken: {
        iconUrl:
          "https://media-float-capital.fra1.cdn.digitaloceanspaces.com/public/tokens/ohm/ohm_short.svg",
        address: "0xe222470497901ef69f7ef3ce4b9830d35bea945a",
        symbol: "fs2OHMv2",
      },
    }
  ],
};

module.exports = { config }
