async function main() {
  // Grab the contract factory 
  const Defix = await ethers.getContractFactory("Defix");

  // Start deployment, returning a promise that resolves to a contract object
  const defix = await Defix.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", defix.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
