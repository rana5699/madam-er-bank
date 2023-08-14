// Login step START here
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    

    if (email === 'ranaot56@gmail.com' && password === 'ranaot56') {
        location.href = "bank.html";
    }
    else{
        return alert('Enter Your Correct Email and password')
    }
})
// Login step END here