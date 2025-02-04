// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

interface IERC20 {
    function balanceOf(address owner) external view returns(uint);
}

contract MyContract {
    IERC20 public usdc = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);

    function usdcBalance(address owner) external view returns(uint) {
        return usdc.balanceOf(owner);
    }
}