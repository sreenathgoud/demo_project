
const greetingForm = document.getElementById("greetingForm");
const usernameInput = document.getElementById("username");
const result = document.getElementById("result");
const healthButton = document.getElementById("healthButton");
const healthStatus = document.getElementById("healthStatus");

greetingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        result.textContent = "Please enter your name.";
        return;
    }

    result.textContent = "Connecting to the backend...";

    try {
        const response = await fetch(
            `/api/greet?name=${encodeURIComponent(username)}`
        );

        if (!response.ok) {
            throw new Error("The server returned an error.");
        }

        const message = await response.text();
        result.textContent = message;
    } catch (error) {
        result.textContent =
            "Could not contact the backend. Please try again.";
    }
});

healthButton.addEventListener("click", async () => {
    healthStatus.textContent = "Checking backend...";

    try {
        const response = await fetch("/api/health");

        if (!response.ok) {
            throw new Error("Health check failed.");
        }

        const message = await response.text();
        healthStatus.textContent = message;
    } catch (error) {
        healthStatus.textContent = "Backend is not reachable.";
    }
});
