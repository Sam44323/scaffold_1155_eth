// contracts/NFT.sol

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract DoinNFT is ERC1155 {
    uint256 private _tokenId = 0;

    constructor() public ERC1155() {}

    function mint(string memory _tokenURI) public {
        _tokenId++;
        uint256 newId = _tokenId;
        _mint(msg.sender, newId, 1, string(_tokenURI));
    }
}
