// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;



contract Defix {
    uint256  public  Counter ;

    event Transact(address indexed from, address indexed receiver, uint amount,  string description ,  string account, uint256 timestamp);
    event Withdraw(address indexed from, uint amount);

    struct TransactStruct {
        address sender;
        address receiver;
        uint amount;
        string description;
        string account;
        uint256 timestamp;

        
    }

    //Declare an array of transferstruct
    TransactStruct  [] public purchase;

    // map out the balance
    mapping(address => uint) public balances;

    // Declare the   transfer function 

    function transfer(address payable receiver, uint amount, string memory description, string memory account) public {
        

        Counter += 1;
        purchase.push(TransactStruct(msg.sender, receiver, amount, description,   account, block.timestamp));

        emit Transact(msg.sender, receiver, amount, description,  account, block.timestamp);

        //receiver.transfer(amount);
    }

    // declare the  withdraw function
    function withdraw(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit Withdraw(msg.sender, amount);
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }


    function getAllPurchases() public view returns (TransactStruct[] memory) {
        return purchase;
    }

    function getCounter() public view returns (uint256) {
        return Counter;
    }
}

