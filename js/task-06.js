document.addEventListener('DOMContentLoaded', function () {
    const inputValidation = this.documentElement.querySelector('#validation-input');

    inputValidation.addEventListener('blur', function () {

        const inputValue = inputValidation.value.trim();
        const expectedLength = parseInt(inputValidation.getAttribute('data-length'), 10);
        if (inputValue.length === expectedLength) {
            inputValidation.classList.remove('invalid');
            inputValidation.classList.add('valid');
        } else {
            inputValidation.classList.remove('valid');
            inputValidation.classList.add('invalid');
        };
    });
});