import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { isDecodedCallTrace } from "hardhat/internal/hardhat-network/stack-traces/message-trace";

describe("NaughtCoin", function () {
    let owner, player:any, user1:any;
    let naughtyCoinContract:any, senderContractContract:any;
    async function deployOneYearLockFixture() {
  
      // Contracts are deployed using the first signer/account by default
      [owner, player,user1] = await ethers.getSigners();
  
      const NaughtCoinFactory = await ethers.getContractFactory("NaughtCoin");
      naughtyCoinContract = await NaughtCoinFactory.deploy(player.address);
      await naughtyCoinContract.deployed();

      const SenderContractFactory = await ethers.getContractFactory("SenderContract");
      senderContractContract = await SenderContractFactory.connect(player).deploy();
      await senderContractContract.deployed();
      
      
    }
    beforeEach(async () => {
        await deployOneYearLockFixture();
    });
    describe("Deployment", function () {
      it('Contract Deployed Well', async () => {
        
      });
    })
    describe('check the balance', () => {
        it('the balance should be 1 million ether', async () => {
            const balanceOfPlayer = await naughtyCoinContract.balanceOf(player.address);
            expect(balanceOfPlayer.toString()).to.equal('1000000000000000000000000');
        });
    });

    describe('Empty the balance', () => {
        it('', async () => {
            const balanceToEmpty:number = 1;
            const balanceInWei = ethers.utils.parseUnits(balanceToEmpty.toString(), "wei");
            await senderContractContract.sendEther(
                naughtyCoinContract.address,
                user1.address,
                balanceToEmpty
            );
            const balanceOfPlayer = await naughtyCoinContract.balanceOf(player.address);
            console.log(balanceOfPlayer)    
        });
        
    });
})