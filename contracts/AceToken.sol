// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    address payable public owner;
    // Price of 1 ace token
    uint256 public price = 10000000000000000 ;
    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
         owner = payable(msg.sender);
        _mint(address(this), 100 * 10 ** uint(decimals()));
    }

    function buyToken(address _recipient, uint256 _amount) payable public returns(bool){
        require(msg.value >= ( price * _amount),"money is less");
        _transfer(address(this), _recipient, _amount * 10 ** uint(decimals()));
        return true;
    }

    function withdraw() public {
        // get the amount of Ether stored in this contract
        uint amount = address(this).balance;

        // send all Ether to owner
        // Owner can receive Ether since the address of owner is payable
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }
}
