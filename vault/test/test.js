const Vault = artifacts.require("Vault");
const { expect } = require("chai");
contract("Force", (accounts) => {
  const [owner, sender] = accounts;
  let contract;
  let provider;
  const pass = "0x123456789";
  beforeEach(async () => {
    contract = await Vault.new(pass);
  });
  it("", async () => {
    const Storage0 = await web3.eth.getStorageAt(contract.address, 0);
    const Storage1 = await web3.eth.getStorageAt(contract.address, 1);
    const previousLocked = await contract.locked();

    // console.log("Storage0", Storage0);
    // console.log("Storage1", Storage1);
    // console.log("previousLocked", previousLocked);
    // expect(previousLocked).to.be(true);
    await contract.unlock(Storage1);
    const unlock = await contract.locked();
    // console.log("unlock", unlock);
    // expect(unlock).to.be(false);
  });
});
