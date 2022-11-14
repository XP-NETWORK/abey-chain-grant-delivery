# Abeychain Grant Delivery

## `Milestone 1` — Integrating into the Bridge Components
| Deliverable |
|-|
| 1. [Validation](#11-validation) - we have added the validation logic relevant for the Abey part of the bridge<br/>2. [NFT-Indexer](#12-nft-indexer) - we have developed search for NFTs by a user account <br/>3. [TX fee estimation](https://github.com/XP-NETWORK/exchange-rate/search?q=abey) - we will integrate Abey to the TX fee estimator<br/>4. [Heartbeat](#13-heartbeat) - we will plug Abey to the bridge heartbeat<br/>5. [Testnet Node integration](https://github.com/XP-NETWORK/xpjs/blob/secretjs/src/consts.ts#L56) - we will plug to a node, start event listening and TX submission<br/>6. [UI](#16-the-ui-testnet) - we will integrate Abey in the bridge UI<br/>7. [Smart Contracts](https://github.com/XP-NETWORK/xpjs/blob/secretjs/src/factory/factories.ts#L138-L143) - we have deployed smart contracts on the testnet<br/>8. [JS library](https://github.com/XP-NETWORK/xpjs/search?q=abey) - we have added Abey to the bridge|

### 1.1 `Validation`

Validation differs from one protocol to another. Additionally, there are chain-specific parameters set for every ledger in the validators.

### 1.2 `NFT Indexer`

NFT-Indexer is a bridge tool fetching the Non-fungible tokens by a user public key.

### 1.3 `Heartbeat`

Heartbeat is a tool checking liveliness of the chain RPC nodes, validators' funds are sufficient for transaction submission, and their responsiveness.

### 1.6 `The UI (Testnet)`

Not every NFT enthusiast is a coder. To support the non-coding community members the bridge is equipped with the sleek & intuitive UI.

More in-detail instructions on using the bridge UI can be found [here](./ui_tutorial.md).

## `Milestone 2` — Testing & Documenting

| Delivery Date | Deliverable | Specification |
|-|-|-|
| 2 weeks | Tests & Documentation | 1. Documentation - we will provide bridge documentation allowing to interact with the [bridge UI](./ui_tutorial.md) and the [JS library](./js_library_tutorial.md).<br/>2. Unit-testing - The code has proper unit-test coverage 85% to ensure functionality and robustness.<br/>3. Testing SCs - We have [deployed](#smart-contracts-deployed-on-the-testnet) and [tested](#testnet-transactions) the contracts in the testnet environment|

### smart contracts deployed on the testnet

|Contract Name|Contract Address|
|:-:|:-:|
|Bridge Contract|[0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2](https://testnet-explorer.abeychain.com/address/0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2)|
|XPNFT ERC-721|[0x8CEe805FE5FA49e81266fcbC27F37D85062c1707](https://testnet-explorer.abeychain.com/address/0x8CEe805FE5FA49e81266fcbC27F37D85062c1707)|
|XPNFT ERC-1155|[0xeBCDdF17898bFFE81BCb3182833ba44f4dB25525](https://testnet-explorer.abeychain.com/address/0xeBCDdF17898bFFE81BCb3182833ba44f4dB25525)|
|Minter ERC721|[0x34933A5958378e7141AA2305Cdb5cDf514896035](https://testnet-explorer.abeychain.com/address/0x34933A5958378e7141AA2305Cdb5cDf514896035)|

### Testnet Transactions
https://testnet-explorer.abeychain.com/address/0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2

# TODO

## `Milestone 3` — Mainnet Integration

| Delivery Date | Deliverable | Specification |
|-|-|-|
| 2 weeks | Mainnet Integration | 1. Mainnet contract deployment - we have deployed smart contracts on the mainnet.<br/>2. JS Library integration - we will integrate Abey in the <br/>&nbsp;&nbsp;&nbsp;&nbsp;+ validators<br/>&nbsp;&nbsp;&nbsp;&nbsp;+ UI <br/>&nbsp;&nbsp;&nbsp;&nbsp;+ NFT-Lister<br/>&nbsp;&nbsp;&nbsp;&nbsp;+ JS Library<br/>&nbsp;&nbsp;&nbsp;&nbsp;+ Widget<br/>&nbsp;&nbsp;&nbsp;&nbsp;+ Heartbeat  <br/>3. We will test that all the components properly work in the mainnet <br/>4. We will make announcements about integrating Abey in the bridge|
