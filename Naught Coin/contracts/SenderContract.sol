// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface INaughtCoin {
    function transfer(address _to, uint256 _value) external;
}

contract SenderContract {
    constructor() {}

    function sendEther(
        address naughtyCoinAddress,
        address _to,
        uint256 _value
    ) public {
        INaughtCoin naughtyCoin = INaughtCoin(naughtyCoinAddress);
        naughtyCoin.transfer(_to, _value);
    }
}
