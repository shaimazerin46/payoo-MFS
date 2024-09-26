document.getElementById('btn_cash_out').addEventListener('click', function(){
    document.getElementById('cashout_div').classList.remove('hidden');
    document.getElementById('add_money_div').classList.add('hidden');
});

document.getElementById('btn_add_money').addEventListener('click', function(){
    document.getElementById('cashout_div').classList.add('hidden');
    document.getElementById('add_money_div').classList.remove('hidden');
})