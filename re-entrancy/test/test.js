const Reentrance = artifacts.require("Reentrance");
const { expect } = require("chai");
contract("Reentrance", (accounts) => {
  const [owner, user1, user2, user3, hacker] = accounts;
  let contract;
  beforeEach(async () => {
    contract = await Reentrance.new();
    await contract.donate(owner, { from: user1, value: 1 });
    await contract.donate(owner, { from: user2, value: 2 });
    await contract.donate(owner, { from: user3, value: 3 });
    const balanceOfOwner = await contract.balanceOf(owner);
    const balanceOfContract = await web3.eth.getBalance(contract.address);
  });
  it("", async () => {});
});
