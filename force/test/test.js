const Force = artifacts.require("Force");
const Web3 = require("web3");
const { expect } = require("chai");
contract("Force", (accounts) => {
  const [owner, sender] = accounts;
  let contract;
  let provider;
  beforeEach(async () => {
    contract = await Force.new();
  });
  it("", async () => {
    const previousBalance = await web3.eth.getBalance(contract.address);

    await web3.eth.sendTransaction({
      from: sender,
      to: contract.address,
      value: web3.utils.toBN(1),
    });
  });
});
