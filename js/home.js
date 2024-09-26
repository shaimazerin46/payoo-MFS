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

