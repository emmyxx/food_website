document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
console.log(email, password);

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
            setTimeout(function() {
              messageElement.textContent = "";
              window.location.href = "index.html";
          }, 1000);
        } else {
            messageElement.textContent = "Echec de la connexion: " + response.message;
        }
    })
    .catch((error) => {
        console.error("Erreur:", error);
    });
});
