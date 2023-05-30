document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    fetch("https://projet-web-back-2wc1.onrender.com/appUsers/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then((response) => response.json())
    .then((response) => {
        const messageElement = document.getElementById("message");
        if (response.message === 'Connexion réussie') {
            messageElement.textContent = "Connexion réussie";
            // Here, you may also want to redirect the user, store the user info, etc.
        } else {
            messageElement.textContent = "Echec de la connexion: " + response.message;
        }
    })
    .catch((error) => {
        console.error("Erreur:", error);
    });
});
