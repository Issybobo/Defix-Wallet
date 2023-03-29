async function main() {
  // Grab the contract factory 
  const Transactions = await ethers.getContractFactory("Transactions");

  // Start deployment, returning a promise that resolves to a contract object
  const transactions = await Transactions.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", transactions.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
