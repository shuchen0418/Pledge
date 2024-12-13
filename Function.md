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

9.function refundLend(uint256 _pid) external nonReentrant notPause timeAfter(_pid) stateNotMatchUndone(_pid)
  存款人质押的钱执行退款操作

10.function claimLend(uint256 _pid) external nonReentrant notPause timeAfter(_pid) stateNotMatchUndone(_pid)
  存款人获取sp_token，也就是利息

11.function withdrawLend(uint256 _pid, uint256 _spAmount)  external nonReentrant notPause stateFinishLiquidation(_pid)
   存款人取钱

12.function emergencyLendWithdrawal(uint256 _pid) external nonReentrant notPause stateUndone(_pid)
   存款人紧急取钱，只会取质押金，没有利息

13.function depositBorrow(uint256 _pid, uint256 _stakeAmount ) external payable nonReentrant notPause timeBefore(_pid) stateMatch(_pid)
   借款人存入质押金

14.function refundBorrow(uint256 _pid) external nonReentrant notPause timeAfter(_pid) stateNotMatchUndone(_pid)
   借款人质押的钱执行退款操作

15.function claimBorrow(uint256 _pid) external nonReentrant notPause timeAfter(_pid) stateNotMatchUndone(_pid)
   贷款人进行贷款，获得钱以及债务代币（jp_token）

16.function withdrawBorrow(uint256 _pid, uint256 _jpAmount ) external nonReentrant notPause stateFinishLiquidation(_pid)
   贷款人还钱，销毁债务代币

17.function emergencyBorrowWithdrawal(uint256 _pid) external nonReentrant notPause stateUndone(_pid)
   贷款人紧急取钱，只会取质押金，没有利息

18.function checkoutSettle(uint256 _pid) public view returns(bool)
   判断是否已经结算

19.function settle(uint256 _pid) public validCall
   结算

20.function checkoutFinish(uint256 _pid) public view returns(bool)
   判断是否完成