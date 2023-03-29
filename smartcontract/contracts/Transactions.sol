// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;





contract Transactions {
    uint256 transactionCount;

    event Transfer(address indexed from, address indexed receiver, uint256 amount, string message, uint256 timestamp, string account);
    event Withdraw(address indexed from, uint256 amount, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string account;
        
    }

    //Declare an array of transferstruct
    TransferStruct[] transactions;

    // map out the balance
    mapping(address => uint256) balances;

    // Declare the   transfer function 

    function transfer(address payable receiver, uint256 amount, string memory message, string memory account) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, account));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, account);

        receiver.transfer(amount);
    }

    // declare the  withdraw function
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit Withdraw(msg.sender, amount, block.timestamp);
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }


    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}

