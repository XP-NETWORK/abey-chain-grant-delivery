import { config } from "dotenv"; config();
import {
    AppConfigs,
    Chain,
    ChainFactory,
    ChainFactoryConfigs,
  } from "xp.network";
  import { Wallet } from "ethers";

  const setup = async () => {

    const factory = ChainFactory(
      AppConfigs.TestNet(),
      await ChainFactoryConfigs.TestNet(),
    );
    
    const abeychain = await factory.inner(Chain.ABEYCHAIN);
    const bsc = await factory.inner(Chain.BSC);
    
  
    const signer = new Wallet(process.env.SK!, abeychain.getProvider());
  
    return {
      factory,
      abeychain,
      bsc,
      signer,
    }
  }

  export {
    setup
  }