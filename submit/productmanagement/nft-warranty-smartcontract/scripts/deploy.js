const { ethers } = require('hardhat');

async function main() {
  console.log('Deploying...');
  const WarrantyNFTContract = await ethers.getContractFactory('WarrantyNFT');
  const warrantyNFT = await WarrantyNFTContract.deploy();
  await warrantyNFT.deployed();
  console.log('Contract deployed at - ', warrantyNFT.address);
  await warrantyNFT.addAdmin('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
