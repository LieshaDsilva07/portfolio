document.getElementById("contact-form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.display = "none";
    }
});
