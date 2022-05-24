open FloatConfig

let isStringUndefinedOrNull: string => bool = %raw(`value => value == undefined || value == null`)
let isIntUndefinedOrNull: int => bool = %raw(`value => value == undefined || value == null`)
let isFloatUndefinedOrNull: float => bool = %raw(`value => value == undefined || value == null`)
let isBoolUndefinedOrNull: bool => bool = %raw(`value => value == undefined || value == null`)

let checkConfigSatifiesTypeSignature = (config: chainConfigShape) => {

  if isStringUndefinedOrNull(config.networkName) {
    j`networkName is not defined for one of the configs`->Js.log
    raise(Not_found) // rest of the tests depend on the network name
  }

  let networkName = config.networkName

  if isIntUndefinedOrNull(config.networkId) {
    j`networkId is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.networkCurrencySymbol) {
    j`networkCurrencySymbol is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.rpcEndpoint) {
    j`rpcEndpoint is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.blockExplorer) {
    j`blockExplorer is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.graphEndpoint) {
    j`graphEndpoint is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.priceHistoryGraphEndpoint) {
    j`priceHistoryGraphEndpoint is not defined for $networkName config`->Js.log
  }

  // Check the contracts

  if isStringUndefinedOrNull(config.contracts.longShort.address) {
    j`longShort address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.staker.address) {
    j`staker address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.stakeBalance.address) {
    j`stakeBalance address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.tokenFactory.address) {
    j`tokenFactory address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.floatToken.address) {
    j`floatToken address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.floatCapital_v0.address) {
    j`floatCapital_v0 address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.treasury_v0.address) {
    j`treasury_v0 address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.gems.address) {
    j`gems address is not defined for $networkName config`->Js.log
  }

  if isStringUndefinedOrNull(config.contracts.gemCollectorNft.address) {
    j`gemCollectorNft address is not defined for $networkName config`->Js.log
  }

  // Check the markets

  let checkErc20 = (token: erc20, tokenName, marketName) => {
    if isStringUndefinedOrNull(token.address) {
      j`address is not defined for $tokenName in $config.networkName config and market with index $marketName`->Js.log
    }

    if isStringUndefinedOrNull(token.symbol) {
      j`symbol is not defined for $tokenName in $config.networkName config and market with index $marketName`->Js.log
    }

    if isStringUndefinedOrNull(token.iconUrl) {
      j`iconUrl is not defined for $tokenName in $config.networkName config and market with index $marketName`->Js.log
    }
  }

  for i in 0 to config.markets->Js.Array2.length-1 {
    let market = config.markets[i]

    if isStringUndefinedOrNull(market.name) {
      let networkName = config.networkName
      j`market name is not defined for $networkName config and market with index $i`->Js.log
      raise(Not_found) // rest of the tests depend on the market name
    }

    let marketName = market.name

    if isIntUndefinedOrNull(market.index) {
      j`index is not defined for $networkName config and $marketName market`->Js.log
    }

    if isStringUndefinedOrNull(market.description) {
      j`description is not defined for $networkName config and $marketName market`->Js.log
    }

    if isStringUndefinedOrNull(market.iconUrl) {
      j`iconUrl is not defined for $networkName config and $marketName market`->Js.log
    }

    if isFloatUndefinedOrNull(market.leverage) {
      j`leverage is not defined for $networkName config and $marketName market`->Js.log
    }

    if isStringUndefinedOrNull(market.symbol) {
      j`symbol is not defined for $networkName config and $marketName market`->Js.log
    }

    if isStringUndefinedOrNull(market.unitOfMeasure) {
      j`unitOfMeasure is not defined for $networkName config and $marketName market`->Js.log
    }

    if isBoolUndefinedOrNull(market.isUnitSuffix) {
      j`isUnitSuffix is not defined for $networkName config and $marketName market`->Js.log
    }

    if isIntUndefinedOrNull(market.actualLaunchTimestamp) {
      j`actualLaunchTimestamp is not defined for $networkName config and $marketName market`->Js.log
    }

    // Check the contracts

    checkErc20(market.paymentToken, "paymentToken", market.name)
    checkErc20(market.longToken, "longToken", market.name)
    checkErc20(market.shortToken, "shortToken", market.name)

    if isStringUndefinedOrNull(market.yieldManager.contract.address) {
      j`yieldManager address is not defined for $networkName config and $marketName market`->Js.log
    }

    if isStringUndefinedOrNull(market.oracleManager.contract.address) {
      j`oracleManager address is not defined for $networkName config and $marketName market`->Js.log
    }

    switch market.yieldManager.providerType {
        | #AAVE => {
          if (market.yieldManager.providerType :> string) != "AAVE" {
            j`yieldManager provider name is incorect for $networkName config and $marketName market`->Js.log
          }
        }
        | #BENQI => {
          if (market.yieldManager.providerType :> string) != "BENQI" {
            j`yieldManager provider name is incorect for $networkName config and $marketName market`->Js.log
          }
        }
        | #JOE => {
          if (market.yieldManager.providerType :> string) != "JOE" {
            j`yieldManager provider name is incorect for $networkName config and $marketName market`->Js.log
          }
        }
    }

    switch market.oracleManager.providerType {
        | #CHAINLINK => {
          if (market.oracleManager.providerType :> string) != "CHAINLINK" {
            j`oracleManager provider name is incorect for $networkName config and $marketName market`->Js.log
          }
        }
    }

  }

}

"Starting tests.."->Js.log
checkConfigSatifiesTypeSignature(avalancheConfig)
checkConfigSatifiesTypeSignature(polygonConfig)
"Tests complete (if there were no messages then there are no failed tests i.e. config is good)"->Js.log



