// add money part
// step 1: add event handler

document.getElementById('add_money').addEventListener('click',function(event){
    event.preventDefault();
    // step 2: get amount 
    const amountInput = document.getElementById('amount_inp').value;
    // step 3: get pin
    const pinInput = document.getElementById('pin_input').value
    // validate pin
    if(pinInput === '1234')
    {
       
        // step 4: get current balance
        const currentBalance = document.getElementById('balance').innerText;
        

        // step 5: add amountInput with currentBalance
        const newBalance = parseFloat(amountInput) + parseFloat(currentBalance);
        
        // step 6: update current balance in UI/DOM
        document.getElementById('balance').innerText = newBalance;
        console.log('money added successfully')
    }
    else{
        console.log('wrong pin')
    }
});

// cash out part
document.getElementById('cash_out').addEventListener('click',function(event){
    event.preventDefault();
    const amountCashOut = document.getElementById('amount_inp_out').value
    const pinCashOut = document.getElementById('pin_input_out').value
    
    if(pinCashOut === '1234'){
        const currentBalanceCashOut = document.getElementById('balance').innerText
        const newBalanceCashOut = parseFloat(currentBalanceCashOut) - parseFloat(amountCashOut);

        document.getElementById('balance').innerText = newBalanceCashOut;
    }
    else{
        console.log('wrong')
    }
});