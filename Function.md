1.function setFee(uint256 _lendFee,uint256 _borrowFee) validCall external
  设置借出和借入的手续费

2.function setSwapRouterAddress(address _swapRouter) validCall external
  设置交易路由的地址 

3.function setFeeAddress(address payable _feeAddress) validCall external
  设置手续费的地址

4.function setMinAmount(uint256 _minAmount) validCall external
  设置最小金额

5.function poolLength() external view returns (uint256)
  获取交易池pool的长度

6.function createPoolInfo(uint256 _settleTime,  uint256 _endTime, uint64 _interestRate,
uint256 _maxSupply, uint256 _martgageRate, address _lendToken, address _borrowToken,
address _spToken, address _jpToken, uint256 _autoLiquidateThreshold) public validCall
  创建交易池

7.function getPoolState(uint256 _pid) public view returns (uint256)
  获取交易池的状态

8.function depositLend(uint256 _pid, uint256 _stakeAmount) external payable nonReentrant notPause timeBefore(_pid) stateMatch(_pid)
  存款人执行存款操作