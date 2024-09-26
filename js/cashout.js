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