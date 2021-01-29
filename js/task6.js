const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    console.log(validationInput.value.length);
       
    if (validationInput.value.length < validationInput.getAttribute('data-length')) {
        validationInput.classList.add('invalid')
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid')
    }
});

