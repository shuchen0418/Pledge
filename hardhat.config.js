
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { PRIVATE_KEY, SEPOLIA_URL } = process.env
console.log("Private key:", PRIVATE_KEY);
console.log("Sepolia URL:", SEPOLIA_URL);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
        {
      version: "0.4.18"
    },
      {
        version: "0.6.12"
      },
      {
        version: "0.5.16"
      }, {
        version: "0.6.6"
      }, {
        version: "0.8.28"
      }, {
        version: "0.8.20"
      }
    ]
  },
  networks:{
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY] // 使用你的私钥
    }
  }
};
