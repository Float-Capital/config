type erc20 = {
  address: string,
  symbol: string,
  iconUrl: option<string>,
}

type contract = {
  address: string,
  description: option<string>,
  codeUrl: option<string>,
  abiUrl: option<string>,
}

type contracts = {
  longShort: contract,
  staker: contract,
  stakeBalance: contract,
  tokenFactory: contract,
  floatToken: contract,
  floatCapital_v0: contract,
  treasury_v0: contract,
  gems: contract,
  gemCollectorNft: contract,
}

type paymentToken = {
  address: string,
  isUSDBased: bool,
  decimals: int,
  symbol: string,
  iconUrl: option<string>,
}

type oracle = {
  decimals: int,
  heartbeat: int,
}

type market = {
  index: int,
  name: string,
  description: string,
  iconUrl: option<string>,
  leverage: int,
  paymentTokenSymbol: string,
  symbol: string,
  launchTimestamp: int,
  createdTimestamp: int,
  yieldManager: contract,
  oracle: oracle,
  longToken: erc20,
  shortToken: erc20,
}

type chainConfigShape = {
  networkId: int,
  networkName: string,
  networkCurrencySymbol: string,
  dbGraphEndpointPublic: option<string>,
  rpcEndopint: string,
  blockExplorer: string,
  graphEndpoint: string,
  priceHistoryGraphEndpoint: string,
  graphPrefix: option<string>,
  bridgeLink: option<string>,
  contracts: contracts,
  paymentTokens: array<paymentToken>,
  hiddenMarkets: option<array<int>>,
  markets: array<market>,
}

@module("./raw/config-avalanche.js") external avalanche: chainConfigShape = "config"

