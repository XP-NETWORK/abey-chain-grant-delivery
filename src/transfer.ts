import { exit } from 'process';
import {setup} from './config';
import list from './list';
import {
    Web3Helper,
    ElrondHelper,
    NftInfo,
} from 'xp.network'

const transfer = async (
    destinationChain: Web3Helper | ElrondHelper, 
    selNFT: NftInfo<unknown>, 
    targetAddress: string,
    mintwith: string|undefined,
) => {

    const {
        factory,
        signer,
        abeychain
    } = await setup();

    const result = await factory.transferNft(
        abeychain,
        destinationChain,
        selNFT,
        signer,
        targetAddress,
        undefined,
        mintwith,
        undefined,
        undefined
    );

    console.log(result);
    
}

(async () => {

    const {signer, bsc} = await setup();

    // Retrieving the list
    const nfts = await list(
        signer.address
    );
    console.log(`Found: ${nfts.length} NFTs`);

    // Selecting an NFT
    const selected = nfts[nfts.length-1];
    console.log("Selected NFT:", selected);

    // Sending an NFT to a foreign chain
    await transfer(
        bsc,            // target chain
        selected,       // selected NFT
        signer.address, // self
        undefined       // default contract
    );
    
    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
})