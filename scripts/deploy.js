const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ["Caesar", "Maurice", "Blue Eyes"], // Names
    ["https://upload.wikimedia.org/wikipedia/en/c/ce/Caesar_Planet_of_the_Apes.jpeg", // Images
    "https://static.wikia.nocookie.net/planetoftheapes/images/2/2c/WPOTA_Maurice.png/revision/latest/scale-to-width-down/700?cb=20171114234033",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qvwtW4Xv5amDzLYb-BTeKgHaGN%26pid%3DApi%26h%3D160&f=1"],
    [300, 200, 100], // HP values
    [100, 50, 25],
    "Koba",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Koba_Planet_of_Apes.jpeg/220px-Koba_Planet_of_Apes.jpeg",
    10000,
    50 // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();