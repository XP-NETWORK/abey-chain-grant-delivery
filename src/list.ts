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

// UNCOMMENT BEFORE RUNNING yarn list-nfts
// (async () => {

//     const {signer} = await setup();

//     // Retrieving the list
//     const nfts = await list(
//         signer.address
//     );
//     console.log(`Found NFTs:`, nfts);
    
// })().catch(e => {
//     console.error(e);
// })

export default list;