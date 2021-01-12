// login  button with even handler 
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", function () {
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = "none";
        const transitionArea = document.getElementById('transition-area');
        transitionArea.style.display = "block";
})
// deposit button with even handler 
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener("click", function () {
        const depositAmount = document.getElementById("depositAmount").value;
        const depositNumber = parseFloat(depositAmount);

        const currentDepositNumber = document.getElementById('currentDeposit').innerText;
        const currentDeposit = parseFloat(currentDepositNumber);
        const totalDepositNumber = depositNumber + currentDeposit;

        document.getElementById("currentDeposit").innerText = totalDepositNumber;
        document.getElementById('depositAmount').value = '';

        const currentBalance = document.getElementById('currentBalance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = depositNumber + currentBalanceNumber;
        document.getElementById('currentBalance').innerText = totalBalance;
})

// withdraw button with even handler
const currentWithdraw = document.getElementById('withdraw-btn');
currentWithdraw.addEventListener('click', function () {

        const withdrawNumber = document.getElementById('withdrawAmounts').value;
        const CurrentWithdrawNumber = parseFloat(withdrawNumber);

        const currentWithdrawAmount = document.getElementById('currentWithdraw').innerText;
        const newWithdrawAmount = parseFloat(currentWithdrawAmount)

        const totalWithdraw = CurrentWithdrawNumber + newWithdrawAmount;

        document.getElementById('currentWithdraw').innerText = totalWithdraw;

        document.getElementById('withdrawAmounts').value = '';


        const currentBalance = document.getElementById('currentBalance').innerText;
        const currentBalanceNew = parseFloat(currentBalance);

        const currentTotalBalance = currentBalanceNew - CurrentWithdrawNumber;

        document.getElementById('currentBalance').innerText = currentTotalBalance;
})