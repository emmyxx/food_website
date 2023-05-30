window.onload = function () {
  afficherMeals();
  afficherIngredients();
};

function afficherMeals() {
  fetch("https://projet-web-back-2wc1.onrender.com/meals/")
    .then((response) => response.json())
    .then((meals) => {
      let mealsContainer = document.getElementById("meals-container");
      meals.forEach((meal) => {
        let box = createMealBox(
          meal.image,
          meal.name,
          meal.price,
          meal.description
        );
        mealsContainer.appendChild(box);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function createMealBox(imageSrc, title, price, description) {
  let box = document.createElement("div");
  box.className = "meal-box";

  let img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "";
  box.appendChild(img);

  let h3 = document.createElement("h3");
  h3.textContent = title;
  box.appendChild(h3);

  let h5 = document.createElement("h5");
  h5.textContent = description;
  box.appendChild(h5);

  let span = document.createElement("span");
  span.textContent = price + "€";
  box.appendChild(span);

  let a = document.createElement("a");
  a.href = "#";
  a.className = "btn";
  a.textContent = "Ajouter à votre commande";
  box.appendChild(a);

  return box;
}

function afficherIngredients() {
  fetch("https://projet-web-back-2wc1.onrender.com/ingredients/")
    .then((response) => response.json())
    .then((ingredients) => {
      let ingredientsContainer = document.getElementById(
        "ingredients-container"
      );
      ingredients.forEach((ingredient) => {
        console.log(ingredient);
        let box = createIngredientBox(
          ingredient.image,
          ingredient.name,
          ingredient.description
        );
        ingredientsContainer.appendChild(box);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function createIngredientBox(imageSrc, title, description) {
  let boxy = document.createElement("div");
  boxy.className = "ingredients-box";

  let img = document.createElement("img");
  img.className = "image";
  img.src = imageSrc;
  boxy.appendChild(img);

  // créer une nouvelle div avec la classe 'content'
  let contentDiv = document.createElement("div");
  contentDiv.className = "content";

  let h3 = document.createElement("h3");
  h3.textContent = title;
  contentDiv.appendChild(h3); // ajoute le h3 à la div 'content'

  let p = document.createElement("p");
  p.textContent = description;
  contentDiv.appendChild(p); // ajoute le h4 à la div 'content'

  // ajoute la div 'content' à la boîte principale
  boxy.appendChild(contentDiv);

  return boxy;
}

