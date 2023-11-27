document.addEventListener("DOMContentLoaded", function () {
    const secretNumber = Math.ceil(Math.random() * 10);
    let attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const submitBtn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", function () {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            setMessage("Please enter a valid number between 1 and 10.");
            return;
        }

        attempts++;

        if (userGuess === secretNumber) {
            setMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`, "green");
            disableInput();
        } else {
            setMessage(`Wrong guess. Try again. Attempts: ${attempts}`, "red");
        }
    });

    function setMessage(msg, color = "black") {
        message.textContent = msg;
        message.style.color = color;
    }

    function disableInput() {
        guessInput.disabled = true;
        submitBtn.disabled = true;
    }
});
