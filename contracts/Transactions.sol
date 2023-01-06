// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



contract Transactions {
    uint256 public transactionCount;
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);
  
    struct TransferStruct {
        address sender;
        address payable receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] public transactions;

    function addTransaction(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

}