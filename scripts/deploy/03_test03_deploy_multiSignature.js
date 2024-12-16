



let multiSignatureAddress = ["0x6240D5f65CB4827f8b1C4b79EB974675382fdcb0",
                            "0x625Cb09431286bA5D28A6715aF05dc656A21644e",
                            "0x01F7fBb6f70A67aeA3AC3d20aa728d1ad9E29C10"];
let threshold = 2;


async function main() {

    const [deployerMin,,,,deployerMax] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployerMax.address
  );

  console.log("Account balance:", (await deployerMax.getBalance()).toString());

  const multiSignatureToken = await ethers.getContractFactory("multiSignature");
  const multiSignature = await multiSignatureToken.connect(deployerMax).deploy(multiSignatureAddress, threshold);

  console.log("multiSignature address:", multiSignature.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });