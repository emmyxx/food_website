document
  .getElementById("register-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
    console.log(email, password);
    fetch("https://projet-web-back-2wc1.onrender.com/appUsers/register", {
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
        console.log(response.error);
        if (!response.error) {
          messageElement.textContent = "Inscription réussie";
          setTimeout(function () {
            messageElement.textContent = "";
            window.location.href = "index.html";
          }, 1000);
        } else {
          messageElement.textContent =
            "Echec de l'inscription: " + response.error;
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  });
