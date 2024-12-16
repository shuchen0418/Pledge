require("@nomiclabs/hardhat-ethers");
const {ethers} = require("hardhat");
require("dotenv").config();


let multiSignatureAddress = "0xeF75E3A7315BD1c023677f4DdAA951A0Bb503C6D";

async function main() {
    const [deployerMin, , , , deployerMax] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployerMin.address
    );

    console.log("Account balance:", (await deployerMin.getBalance()).toString());

    const oracleToken = await ethers.getContractFactory("BscPledgeOracle");
    console.log("Deploying contract...");

    const oracle = await oracleToken.connect(deployerMin).deploy(multiSignatureAddress);

    console.log("Oracle contract deployed!");

    // Print contract address to check if it's correct
    console.log("Oracle address:", oracle.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
