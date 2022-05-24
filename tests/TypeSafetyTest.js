// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_array = require("rescript/lib/js/caml_array.js");
var FloatConfig = require("../src/FloatConfig.js");

var isStringUndefinedOrNull = (value => value == undefined || value == null);

var isIntUndefinedOrNull = (value => value == undefined || value == null);

var isFloatUndefinedOrNull = (value => value == undefined || value == null);

var isBoolUndefinedOrNull = (value => value == undefined || value == null);

function checkConfigSatifiesTypeSignature(config) {
  if (isStringUndefinedOrNull(config.networkName)) {
    console.log("networkName is not defined for one of the configs");
    throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
  }
  var networkName = config.networkName;
  if (isIntUndefinedOrNull(config.networkId)) {
    console.log("networkId is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.networkCurrencySymbol)) {
    console.log("networkCurrencySymbol is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.rpcEndpoint)) {
    console.log("rpcEndpoint is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.blockExplorer)) {
    console.log("blockExplorer is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.graphEndpoint)) {
    console.log("graphEndpoint is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.priceHistoryGraphEndpoint)) {
    console.log("priceHistoryGraphEndpoint is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.longShort.address)) {
    console.log("longShort address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.staker.address)) {
    console.log("staker address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.stakeBalance.address)) {
    console.log("stakeBalance address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.tokenFactory.address)) {
    console.log("tokenFactory address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.floatToken.address)) {
    console.log("floatToken address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.floatCapital_v0.address)) {
    console.log("floatCapital_v0 address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.treasury_v0.address)) {
    console.log("treasury_v0 address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.gems.address)) {
    console.log("gems address is not defined for " + networkName + " config");
  }
  if (isStringUndefinedOrNull(config.contracts.gemCollectorNft.address)) {
    console.log("gemCollectorNft address is not defined for " + networkName + " config");
  }
  var checkErc20 = function (token, tokenName, marketName) {
    if (isStringUndefinedOrNull(token.address)) {
      console.log("address is not defined for " + tokenName + " in " + config + ".networkName config and market with index " + marketName);
    }
    if (isStringUndefinedOrNull(token.symbol)) {
      console.log("symbol is not defined for " + tokenName + " in " + config + ".networkName config and market with index " + marketName);
    }
    if (isStringUndefinedOrNull(token.iconUrl)) {
      console.log("iconUrl is not defined for " + tokenName + " in " + config + ".networkName config and market with index " + marketName);
      return ;
    }
    
  };
  for(var i = 0 ,i_finish = config.markets.length; i < i_finish; ++i){
    var market = Caml_array.get(config.markets, i);
    if (isStringUndefinedOrNull(market.name)) {
      var networkName$1 = config.networkName;
      console.log("market name is not defined for " + networkName$1 + " config and market with index " + i);
      throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
    }
    var marketName = market.name;
    if (isIntUndefinedOrNull(market.index)) {
      console.log("index is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isStringUndefinedOrNull(market.description)) {
      console.log("description is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isStringUndefinedOrNull(market.iconUrl)) {
      console.log("iconUrl is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isFloatUndefinedOrNull(market.leverage)) {
      console.log("leverage is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isStringUndefinedOrNull(market.symbol)) {
      console.log("symbol is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isStringUndefinedOrNull(market.unitOfMeasure)) {
      console.log("unitOfMeasure is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isBoolUndefinedOrNull(market.isUnitSuffix)) {
      console.log("isUnitSuffix is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isIntUndefinedOrNull(market.createdTimestamp)) {
      console.log("createdTimestamp is not defined for " + networkName + " config and " + marketName + " market");
    }
    checkErc20(market.paymentToken, "paymentToken", market.name);
    checkErc20(market.longToken, "longToken", market.name);
    checkErc20(market.shortToken, "shortToken", market.name);
    if (isStringUndefinedOrNull(market.yieldManager.contract.address)) {
      console.log("yieldManager address is not defined for " + networkName + " config and " + marketName + " market");
    }
    if (isStringUndefinedOrNull(market.oracleManager.contract.address)) {
      console.log("oracleManager address is not defined for " + networkName + " config and " + marketName + " market");
    }
    var match = market.yieldManager.providerType;
    if (match === "AAVE") {
      if (market.yieldManager.providerType !== "AAVE") {
        console.log("yieldManager provider name is incorect for " + networkName + " config and " + marketName + " market");
      }
      
    } else if (match === "BENQI") {
      if (market.yieldManager.providerType !== "BENQI") {
        console.log("yieldManager provider name is incorect for " + networkName + " config and " + marketName + " market");
      }
      
    } else if (market.yieldManager.providerType !== "JOE") {
      console.log("yieldManager provider name is incorect for " + networkName + " config and " + marketName + " market");
    }
    if (market.oracleManager.providerType !== "CHAINLINK") {
      console.log("oracleManager provider name is incorect for " + networkName + " config and " + marketName + " market");
    }
    
  }
  
}

console.log("Starting tests..");

checkConfigSatifiesTypeSignature(FloatConfig.avalancheConfig);

checkConfigSatifiesTypeSignature(FloatConfig.polygonConfig);

console.log("Tests complete (if there were no messages then there are no failed tests i.e. config is good)");

exports.isStringUndefinedOrNull = isStringUndefinedOrNull;
exports.isIntUndefinedOrNull = isIntUndefinedOrNull;
exports.isFloatUndefinedOrNull = isFloatUndefinedOrNull;
exports.isBoolUndefinedOrNull = isBoolUndefinedOrNull;
exports.checkConfigSatifiesTypeSignature = checkConfigSatifiesTypeSignature;
/*  Not a pure module */
