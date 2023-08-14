document.getElementById('btn-diposit').addEventListener('click', function(){
    // Diposit START
    const deposidField = document.getElementById('deposid-field');
    const newDeposidAmmount = parseFloat(deposidField.value);

    
    deposidField.value = '';
    if (newDeposidAmmount <= 0) {
        alert('Please Provide minimum ammount')
        return;
    }
    const deposidDisplayTotal = document.getElementById('deposid-display');
    let previousTotalDiposit = parseFloat(deposidDisplayTotal.innerText);
    const currentTotal = previousTotalDiposit + newDeposidAmmount;
    deposidDisplayTotal.innerText = currentTotal;


    const displayBalance = document.getElementById('balance-display');
    const displayBalanceTotal = parseFloat(displayBalance.innerText);
    const currentTotalBalance = displayBalanceTotal + newDeposidAmmount;
    displayBalance.innerText = currentTotalBalance;
  
})
  // Diposit done

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawValue = parseFloat(withdrawField.value);
    const displayWithdrawValue = document.getElementById('withdraw-display');
    const previousWithdrawValue = parseFloat(displayWithdrawValue.innerText);
   

    const displayBalance = document.getElementById('balance-display');
    const displayBalanceTotal = parseFloat(displayBalance.innerText);


    withdrawField.value = '';
    if (newWithdrawValue <= 0) {
        alert('Please provide a minimum amount');
        return;
    } else if (newWithdrawValue > displayBalanceTotal) {
        alert('Madam Apnar Account e TK nai');
        return;
    }


    const currentWithdrawValue = previousWithdrawValue;

    const total = currentWithdrawValue + newWithdrawValue;
    displayWithdrawValue.innerText = total;

    const updateBalance = displayBalanceTotal - newWithdrawValue;
    displayBalance.innerText = updateBalance;

    
})



