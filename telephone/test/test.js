const Telephone = artifacts.require("Telephone");
const HackContract = artifacts.require("HackContract");
const { expect } = require("chai");
contract("MetaCoin", (accounts) => {
  const [owner, hackUser] = accounts;
  let telephoneContract;
  beforeEach(async () => {
    telephoneContract = await Telephone.new({ from: owner });
  });

  it("should get Ownership", async () => {
    const previousOwner = await telephoneContract.owner();
    expect(previousOwner).to.be.equal(owner);
    console.log(previousOwner);
    const hackContract = await HackContract.new(telephoneContract.address, {
      from: hackUser,
    });
    await hackContract.getOwnership(hackUser, { from: hackUser });
    const newOwner = await telephoneContract.owner();
    expect(newOwner).to.be.equal(hackUser);
  });
});
