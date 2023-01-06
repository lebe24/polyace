const hre = require("hardhat");
const fs  = require('fs')

async function main(){
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionsFactory.deploy();
  await transactionsContract.deployed();

  const tokenPrice = 1000000000000;

  const aceTokenFactory = await hre.ethers.getContractFactory("AceToken");
  const aceTokenContract = await aceTokenFactory.deploy(1000000);
  const tokenSaleFactory = await hre.ethers.getContractFactory("TokenSale");

  const tokenSaleContract = await tokenSaleFactory.deploy(
    aceTokenContract.address,
    tokenPrice
  );

  await aceTokenContract.deployed();
  await tokenSaleContract.deployed();

  // Lottery
  const lotteryPoolFactory = await hre.ethers.getContractFactory("LotteryPool");
  const lotteryPoolContract = await lotteryPoolFactory.deploy();

  await lotteryPoolContract.deployed();

  fs.writeFileSync('src/config.js', `
    export const transactionsContractAddress = "${transactionsContract.address}" \n
    export const aceTokenContractAddress = "${aceTokenContract.address}" \n
    export const tokenSaleContractAddress = "${tokenSaleContract.address}" \n
    export const lotteryPoolContractAddress = "${lotteryPoolContract.address}"\n
  `)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
