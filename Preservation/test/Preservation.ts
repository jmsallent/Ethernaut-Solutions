import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Preservation", function () {
  let owner:any, hackAccount:any;
  let libraryContract1: any , libraryContract2:any, preservationContract:any;
  async function deployOneYearLockFixture() {
    
    [owner, hackAccount] = await ethers.getSigners();

    const LibraryContractFactory = await ethers.getContractFactory("LibraryContract");

    libraryContract1 = await LibraryContractFactory.connect(owner).deploy();
    await libraryContract1.deployed();

    libraryContract2 = await LibraryContractFactory.connect(owner).deploy();
    await libraryContract2.deployed();

    const PreservationFactory = await ethers.getContractFactory("Preservation");
    preservationContract = await PreservationFactory.connect(owner).deploy(libraryContract1.address, libraryContract2.address);
    await preservationContract.deployed();

  }
  beforeEach(async () => {
    await deployOneYearLockFixture();
  });

  describe("Preservation Deployment", function () {
    it("", async function () {
      let result;
      result = await ethers.provider.getStorageAt(preservationContract.address, 0);
      console.log(result);
      result = await ethers.provider.getStorageAt(preservationContract.address, 1);
      console.log(result);
      result = await ethers.provider.getStorageAt(preservationContract.address, 2);
      console.log(result);
      result = await ethers.provider.getStorageAt(preservationContract.address, 3);
      console.log(result);
      result = await ethers.provider.getStorageAt(preservationContract.address, 4);
      console.log(result);
    });

  });

  
});
