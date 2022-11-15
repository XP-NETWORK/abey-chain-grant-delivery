import { exit } from 'process';
import { setup } from './config';
import list from './list';
import {
    Web3Helper,
    ElrondHelper,
    NftInfo,
    ChainFactory
} from 'xp.network'
import { Wallet } from "ethers";

const transfer = async (
    destinationChain: Web3Helper | ElrondHelper,
    selNFT: NftInfo<unknown>,
    targetAddress: string,
    mintwith: string | undefined,
    signer: Wallet,
    factory: ChainFactory,
    abeychain: Web3Helper
) => {

    const estimation = await factory.estimateFees(
        abeychain,
        //@ts-ignore
        destinationChain,
        selNFT,
        targetAddress
    )
    console.log("5. Estimation:", estimation.toString());
    
    // Due to an error of hash mismatch enclosed in try-catch:
    let approved: string | undefined;
    try {
        console.log("6. Approving...");
        approved = await abeychain.approveForMinter(
            //@ts-ignore
            selNFT,
            signer,
            estimation
        );
    } catch (error) {

    } finally {
        // This log may be missing due to the hash mismatch
        if (approved) console.log(`7. Approved: ${approved}`);
    }

    console.log("8. Transferring...");

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

    return result;

}

(async () => {

    console.log("1. Started setup...");

    const {
        signer,
        bsc,
        factory,
        abeychain
    } = await setup();

    console.log("2. Finished setup...");


    // Retrieving the list
    const nfts = await list(
        signer.address
    );
    console.log(`3. Found: ${nfts.length} NFTs`);

    // Selecting an NFT
    const selected = nfts[nfts.length - 1];
    console.log("4. Selected NFT:", selected);

    // Sending an NFT to a foreign chain
    const result = await transfer(
        bsc,            // target chain
        selected,       // selected NFT
        signer.address, // self
        undefined,      // default contract
        signer,
        factory,
        abeychain
    );

    console.log("9. Transfer result:", result);

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
})