# JS Library Usage Tutorial for Abeychain

## 0. Setting up the repo for testing

```bash
git clone https://github.com/XP-NETWORK/abey-chain-grant-delivery.git .
yarn
touch .env
echo "SK=your-evm-private-key" >> .env
```

## 1. Minting an NFT for testing

Open file `/src/mint.ts` at lines 31-32.

Replace the minting parameters with yours or leave the default ones.

In the terminal window of the project run:

```bash
yarn mint
```

## 2. Listing NFTs

2.1 Uncomment the lines # 19-32 of the file `/src/list.ts`

2.2 In the terminal window of the project run:

```bash
yarn list-nfts
```

2.3 Comment the lines # 19-32 of the file `/src/list.ts` to keep the output clear for transfer.

The TS code example can be found in `/src/list.ts`

Example output:

```bash
$ tsc && node ./dist/list.js
Found: 14 NFTs
Selected NFT: {
  uri: 'https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn',
  native: {
    chainId: '33',
    tokenId: '20',
    owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
    contract: '0x34933A5958378e7141AA2305Cdb5cDf514896035',
    symbol: 'UMT',
    name: 'UserNftMinter',
    uri: 'https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn',
    contractType: 'ERC721'
  },
  collectionIdent: '0x34933A5958378e7141AA2305Cdb5cDf514896035'
}
✨  Done in 5.11s.
```

## 3. Transferring NFTs

Open file `/src/transfer.ts` at lines 55-58.

Replace the transfer parameters with yours or leave the default ones.

In the terminal window of the project run:

```bash
yarn transfer
```

Example output:

``` bash
$ tsc && node ./dist/transfer.js
1. Started setup...
2. Finished setup...
3. Found: 14 NFTs
4. Selected NFT: {
  uri: 'https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn',
  native: {
    chainId: '33',
    tokenId: '20',
    owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
    contract: '0x34933A5958378e7141AA2305Cdb5cDf514896035',
    symbol: 'UMT',
    name: 'UserNftMinter',
    uri: 'https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn',
    contractType: 'ERC721'
  },
  collectionIdent: '0x34933A5958378e7141AA2305Cdb5cDf514896035'
}
5. Estimation: 2260718006352237355
6. Approving...
8. Transferring...
2260718006352237355
Minting With : 0x783eF7485DCF27a3Cf59F5A0A406eEe3f9b2AaeB
9. Transfer result: {
  hash: '0x078e8e2ce123f189b5f78c1c11d850f94313d6cc7441a3785f31b0ced74e4e3e',
  type: 0,
  accessList: null,
  blockHash: null,
  blockNumber: null,
  transactionIndex: 0,
  confirmations: 0,
  from: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
  gasPrice: BigNumber { _hex: '0x0ba43b7400', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x019b5a', _isBigNumber: true },
  to: '0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2',
  value: BigNumber { _hex: '0x1f5faf0c89f4532b', _isBigNumber: true },
  nonce: 31,
  data: '0x90e704e500000000000000000000000034933a5958378e7141aa2305cdb5cdf5148960350000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000002a30783064376466343230313430363461313633446644413430343235336661396636383833623931383700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a30783738336546373438354443463237613343663539463541304134303665456533663962324161654200000000000000000000000000000000000000000000',
  r: '0x37205aaf58902950dbd94354d1879287526ea8ca40a5da4b1cecd8c6c2f57677',
  s: '0x6aa0605a3725302ccb08c49b1b50af7c67fe2e1c236557f59b07f0136c1ae501',
  v: 391,
  creates: null,
  chainId: 178,
  wait: [Function (anonymous)]
}
✨  Done in 26.16s.
```

Token received on BSC: https://testnet.bscscan.com/tx/0xa8602070ab073225c5ee5823270adaf19f0f5f71c6021f72e907cb4de3d79b46

## 4. Viewing wrapped metadata:

For unmapped contracts with generated target [tokenID](https://testnet.bscscan.com/token/0x783ef7485dcf27a3cf59f5a0a406eee3f9b2aaeb?a=30778394530356378197902916744):

<base-uri>/w/<tokenId>

https://bridge-wnftapi.herokuapp.com/w/30778394530356378197902916744

```json
{
   "name": "AbeyChain in XP.NETWORK Bridge",
   "description": "AbeyChain in XP.NETWORK Bridge",
   "decimals": 0,
   "isBooleanAmount": true,
   "image": "https://gateway.pinata.cloud/ipfs/QmYqgZpZvxF3Cj6bMpNBrYTqGgtzvNE9YNAPrDRHe4XasE",
   "artifactUri": "https://gateway.pinata.cloud/ipfs/QmYqgZpZvxF3Cj6bMpNBrYTqGgtzvNE9YNAPrDRHe4XasE",
   "wrapped": {
      "contract": "0x34933A5958378e7141AA2305Cdb5cDf514896035",
      "tokenId": "20",
      "contractType": 721,
      "origin": "33",
      "original_uri": "https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn",
      "mint_with": "0x783eF7485DCF27a3Cf59F5A0A406eEe3f9b2AaeB",
      "source_mint_ident": "0x34933A5958378e7141AA2305Cdb5cDf514896035",
      "source_token_id": "20"
    },
"attributes": [
      {
         "trait_type": "Original Chain",
         "value": "AbeyChain"
      },
      {
         "trait_type": "Original Chain Nonce",
         "value": "33"
      },
      {
         "trait_type": "Original URI",
         "value": "https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn"
      },
      {
         "trait_type": "Original Chain",
         "value": "Abeychain"
      },
      {
         "trait_type": "Destination Chain",
         "value": "BSC"
      },
      {
         "trait_type": "Mainnet",
         "value": true
      },
      {
         "trait_type": "Staging",
         "value": true
      }
   ],
   "displayUri": "https://gateway.pinata.cloud/ipfs/QmYqgZpZvxF3Cj6bMpNBrYTqGgtzvNE9YNAPrDRHe4XasE",
   "thumbnailUri": "https://gateway.pinata.cloud/ipfs/QmYqgZpZvxF3Cj6bMpNBrYTqGgtzvNE9YNAPrDRHe4XasE",
   "ipfs": false
}
```