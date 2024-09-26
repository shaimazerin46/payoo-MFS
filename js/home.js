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
        console.log('correct pin');
        // step 4: get current balance
        const currentBalance = document.getElementById('balance').innerText;
        console.log(currentBalance)
    }
    else{
        console.log('wrong pin')
    }
});