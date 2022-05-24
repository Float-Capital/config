# Configuration repo
Contains mainly config for the various Float Captial smart contracts, which chains they're deployed to and what their addresses are there.

Why is there no specific config for the yield provider or the oracle?
- first, for the yield provider, its not entirely clear that there would be 1 address. There may be none or there may be a few. It's completely customizable via the yieldManager. So we rather just keep the yieldManager address here in the static config and have the rest of the data accessible via the float client
- similar with the oracle
