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

In the terminal window of the project run:

```bash
yarn list-nfts
```

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