const form=document.getElementById('form');
console.log(form);
const Email =document.getElementById('email');
console.log(Email);
const buttons =document.querySelector('.buttons');
console.log(buttons);

//let adds an event listener to our form
form.addEventListener('submit',(event) =>{
    //this prevent the form from submitting
    event.preventDefault();

    validateInputs();
})

//let's form a function for the set error message
const setError = function(element, message){
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = function(element){
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
   
    errorDisplay.innerText='';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

//regular expression for email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = function(){
    const EmailValue =Email.value.trim()
    if(EmailValue === '') {
        setError(Email, 'Whoops! It looks like you forgot to add your email');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Please provide a valid email address');
    } else {
        setSuccess(Email);
    }

}