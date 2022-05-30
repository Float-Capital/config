type erc20 = {address: string, symbol: string, iconUrl: string}
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
  iconUrl: string,
}
type oracleProvider = [#CHAINLINK]
type oracleManager = {providerType: oracleProvider, contract: contract}
type yieldProvider = [#AAVE | #BENQI | #JOE]
type yieldManager = {providerType: yieldProvider, contract: contract}
type market = {
  index: int,
  name: string,
  description: string,
  iconUrl: string,
  leverage: float,
  paymentToken: erc20,
  symbol: string,
  unitOfMeasure: string,
  isUnitSuffix: bool,
  plannedLaunchTimestamp: option<int>,
  actualLaunchTimestamp: int,
  yieldManager: yieldManager,
  oracleManager: oracleManager,
  longToken: erc20,
  shortToken: erc20,
}
type chainConfigShape = {
  networkId: int,
  networkName: string,
  networkCurrencySymbol: string,
  dbGraphEndpointPublic: option<string>,
  rpcEndpoint: string,
  blockExplorer: string,
  graphEndpoint: string,
  priceHistoryGraphEndpoint: string,
  graphPrefix: option<string>,
  bridgeLink: option<string>,
  contracts: contracts,
  hiddenMarkets: option<array<int>>,
  markets: array<market>,
}
let avalancheConfig: chainConfigShape
let polygonConfig: chainConfigShape
let getChainConfig: int => option<chainConfigShape>
