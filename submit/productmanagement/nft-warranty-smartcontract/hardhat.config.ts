import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // Set the chainId if you want a custom chainId for your localhost
      chainId: 31337
    },
  },
  paths: {
    artifacts: '../nft-warranty-client/src/artifacts',
  },
};

export default config;