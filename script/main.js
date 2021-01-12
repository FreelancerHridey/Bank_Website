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
        const addNumber = parseFloat(depositAmount);

        UpdateSpanTag("currentDeposit",addNumber);
        UpdateSpanTag("currentBalance",addNumber);

        document.getElementById('depositAmount').value = '';
})

function UpdateSpanTag(id,addNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = addNumber + currentNumber;
        document.getElementById(id).innerText = total;
}

// withdraw button with even handler
const currentWithdraw = document.getElementById('withdraw-btn');
currentWithdraw.addEventListener('click', function () {

        const withdrawNumber = document.getElementById('withdrawAmounts').value;
        const addNumber = parseFloat(withdrawNumber);

        UpdateSpanTag("currentWithdraw",addNumber)
        UpdateSpanTag("currentBalance",-1 * addNumber)

        document.getElementById('withdrawAmounts').value = '';
})