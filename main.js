document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const notification = document.getElementById("notification");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            fetch("process_form.php", {
                method: "POST",
                body: new FormData(form),
            })
            .then((response) => response.text()) // Use response.text() to get the response data
            .then((data) => {
                console.log("Response:", data); // Log the response data

                // Apply the appropriate class based on success or error
                notification.className = data.includes("Thank you") ? "success" : "error";

                notification.innerHTML = data;
                notification.style.display = "block"; // Display the notification
                form.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        });
    }
});
