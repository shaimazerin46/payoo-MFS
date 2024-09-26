// form submit reloading the page

// step 1: add event handler
document.getElementById('log_btn').addEventListener('click', function(event){
    //step 2: prevent default loading
    event.preventDefault();
    console.log('login button clicked')
// step 3: get the phon=e number value
    const phoneInput = document.getElementById('phone_inp').value
    
    // step 4: get pin number value
    const pinInput = document.getElementById('pin_inp').value
    console.log(phoneInput, pinInput)
// this is temporary
// step 5: validation
    if(phoneInput === '5' && pinInput === '1234')
    {
        console.log('login successfull')
        // step 6: allow user to use the website
    }
    else{
        console.log('something wrong')
    }
});