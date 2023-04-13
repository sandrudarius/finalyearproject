import { browser } from '$app/env';
import { ethers } from 'ethers';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

import * as contract from '../artifacts/contracts/WarrantyNFT.sol/WarrantyNFT.json';

let Contract: any, ContractWithSigner: any;
let initialized = false;

if (browser) {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  await provider.send('eth_requestAccounts', []);

  const signer = provider.getSigner();

  const abi = contract.abi;

  Contract = new ethers.Contract(contractAddress, abi, provider);
  console.log('Initialized Contract:', Contract); // log the Contract object
  ContractWithSigner = (Contract as any).connect(signer);
} else {
  Contract = undefined;
  ContractWithSigner = undefined;
}

export default Contract;
export { ContractWithSigner };
