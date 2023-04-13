Setting Up the Project Environment

Follow these detailed steps to set up the project environment:

Clone or Download the Repository:
First, clone the repository from the GitHub project page or download it as a ZIP file and extract the contents to a local folder on your computer.

Install Dependencies:
Open a terminal, navigate to the project folder, and run the following command to install the required dependencies:


$ npm install
This command installs all the necessary packages listed in the project's package.json file.


Start Hardhat Local Node:
Next, start a local Hardhat node to interact with the smart contracts. Run the following command in the terminal:


$ npx hardhat node
This command starts a local Ethereum node that simulates the blockchain for development purposes.

Run Deployment Script:
In a separate terminal window, navigate to the project folder and execute the following command to deploy the smart contracts to the local Hardhat node:


$ npx hardhat run ./scripts/deploy.js --network localhost
This command deploys the smart contracts to the local Ethereum network and provides you with the contract addresses.

Start Frontend Development Server:
Finally, start the frontend development server to interact with the deployed smart contracts. In the terminal, run the following command:


$ npm run start
This command starts a local development server for the frontend application, which will automatically open in your web browser. You can now interact with the smart contracts through the user interface.