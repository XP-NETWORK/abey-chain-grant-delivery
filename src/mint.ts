import { exit } from 'process';
import {setup} from './config';

const mint = async (
    contract:string,
    uri:string
) => {

    const {
        abeychain,
        factory,
        signer
    } = await setup();

    const result = await factory.mint(
        abeychain,
        signer,
        {
            contract,
            uri
        }
    );

    console.log("Minted:", result);
    
}

(async () => {

    await mint(
        /* contract */ "0x34933A5958378e7141AA2305Cdb5cDf514896035",
        /*uri       */ "https://gateway.pinata.cloud/ipfs/QmXp1rXokpwLMHj1y8MXEjkiRQWJaVtUs8YKTYEz1sfJtn"
    )

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
})