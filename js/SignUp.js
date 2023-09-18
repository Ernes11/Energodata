
    // The following code for sign up page///////

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });






// links.forEach(link => {
// link.addEventListener("click", e => {
//  e.preventDefault(); //preventing form submit
//  forms.classList.toggle("show-signup");
// })
// })
