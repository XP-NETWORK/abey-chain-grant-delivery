import { exit } from 'process';
import {setup} from './config';

const list = async (
    address:string
) => {
    const {
        abeychain,
        factory
    } = await setup();

    return await factory.nftList(
        abeychain,
        address
    )

}

(async () => {

    const {signer} = await setup();

    // Retrieving the list
    const nfts = await list(
        signer.address
    );
    console.log(`Found: ${nfts.length} NFTs`);

    // Selecting an NFT
    const selected = nfts[nfts.length-1];
    console.log("Selected NFT:", selected);
    
    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
})

export default list;