const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ["Caesar", "Maurice", "Blue Eyes"], // Names
    ["https://upload.wikimedia.org/wikipedia/en/c/ce/Caesar_Planet_of_the_Apes.jpeg", // Images
    "https://static.wikia.nocookie.net/planetoftheapes/images/2/2c/WPOTA_Maurice.png/revision/latest/scale-to-width-down/700?cb=20171114234033",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qvwtW4Xv5amDzLYb-BTeKgHaGN%26pid%3DApi%26h%3D160&f=1"],
    [300, 200, 100], // HP values
    [100, 50, 25] // Attack damage values
  )
  await gameContract.deployed()
  console.log("Contact deployed to: ", gameContract.address)

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()