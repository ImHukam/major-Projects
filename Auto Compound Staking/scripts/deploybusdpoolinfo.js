const hre = require("hardhat");

async function main() {

  const BUSDPixelSafePool = await hre.ethers.getContractFactory("VyncBusdPoolInfo");
  const bUSDPixelSafePool = await BUSDPixelSafePool.deploy();

  await bUSDPixelSafePool.deployed();

  console.log("Token deployed to:", bUSDPixelSafePool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
