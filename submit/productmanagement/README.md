Navigate to the NFT Warranty Smart Contract Folder:
Open a terminal and change your working directory to the NFT Warranty Smart Contract folder by executing the following command:

cd .\nft-warranty-smartcontract\
Install Dependencies:
Run the following command to install the required dependencies for the smart contract project:

npm install
Deploy the Smart Contract to the Hardhat Network:
Execute the following command to deploy the smart contract to the Hardhat network:

npx hardhat run ./scripts/deploy.js --network hardhat
Start the Hardhat Node:
Run the following command to start a local Hardhat node:

npx hardhat node
Now, switch to setting up the NFT Warranty Client:

Open a New Terminal:
Open a new terminal window, keeping the current one running the Hardhat node.

Navigate to the NFT Warranty Client Folder:
Change your working directory to the NFT Warranty Client folder by executing the following command in the new terminal:


cd .\nft-warranty-client\
Install Dependencies:
Run the following command to install the required dependencies for the client application:

npm install
Start the Development Server:
Finally, start the frontend development server for the client application by running the following command:

npm run dev
The development server will start, and the client application should automatically open in your web browser. You can now interact with the NFT Warranty Smart Contract through the user interface.