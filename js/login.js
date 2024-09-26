// form submit reloading the page

// step 1: add event handler
document.getElementById('log_btn').addEventListener('click', function(event){
    //step 2: prevent default loading
    event.preventDefault();
    console.log('login button clicked')
// step 3: get the phon=e number value
    const phoneInput = document.getElementById('phone_inp')
    console.log(phoneInput.value)
    // step 4: get pin number value
    const pinInput = document.getElementById('pin_inp').value
    console.log(pinInput)
});