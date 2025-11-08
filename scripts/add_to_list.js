const british_cuisine = [
    "Full English Breakfast",
    "Eggs Benedict",
    "Beans on Toast",
    "Porridge",
    "Kippers",
    "Black Pudding",
    "Crumpets",
    "Bacon Sandwich (Bacon Butty)",
    "Bubble and Squeak",
    "Smoked Salmon & Scrambled Eggs",
    "Ploughman’s Lunch",
    "Fish and Chips",
    "Cornish Pasty",
    "Scotch Egg",
    "Sausage Roll",
    "Welsh Rarebit",
    "Jacket Potato",
    "Chicken and Leek Pie",
    "Cottage Pie",
    "Prawn Cocktail",
    "Roast Beef and Yorkshire Pudding",
    "Shepherd’s Pie",
    "Beef Wellington",
    "Toad in the Hole",
    "Lamb Shank with Mint Sauce",
    "Steak and Ale Pie",
    "Bangers and Mash",
    "Chicken Tikka Masala",
    "Fish Pie",
    "Eton Mess",
    "Sticky Toffee Pudding",
    "Bread and Butter Pudding",
    "Trifle",
    "Victoria Sponge Cake",
    "Bakewell Tart",
    "Spotted Dick",
    "Apple Crumble",
    "Banoffee Pie",
    "Treacle Tart",
    "Scones with Clotted Cream and Jam"
];

// make counter mutable
let counter = 0;

// set the current cuisine
let current_cuisine = british_cuisine[counter];

function updateIngredientsList(fullRecipeText) {
    const sheet = document.getElementById("ingredientsSheet");
    if (!sheet) {
        console.error("error getElementById");
        return;
    }

    let startIndex = fullRecipeText.indexOf("Ingredients:");
    let endIndex = fullRecipeText.indexOf("Recipe:");

    if (startIndex === -1 || endIndex === -1) {
        console.warn("cannot find 'Ingredients:' or 'Recipe:' mark");
        const errorItem = document.createElement("div");
        errorItem.className = "ingredient-item";
        errorItem.innerHTML = `<p style="color: #7f8c8d;">Could not parse ingredients from recipe.</p>`;
        sheet.appendChild(errorItem);
        return;
    }

    const ingredientsBlock = fullRecipeText.substring(startIndex + "Ingredients:".length, endIndex).trim();
    const ingredientLines = ingredientsBlock.split('- ');
    let ingredientsFound = 0;

    for (const line of ingredientLines) {
        const trimmedLine = line.trim();
        if (trimmedLine) {
            console.log(`trimmedLine ${trimmedLine}`);
            ingredientsFound++;

            const newItem = document.createElement("div");
            newItem.className = "ingredient-item";
            newItem.innerHTML = `<strong>${trimmedLine}</strong>`;
            sheet.appendChild(newItem);
        }
    }

    if (ingredientsFound === 0) {
        const noItem = document.createElement("div");
        noItem.className = "ingredient-item";
        noItem.innerHTML = `<p style="color: #7f8c8d;">No ingredients listed for this recipe.</p>`;
        sheet.appendChild(noItem);
    }
}

function add_ingredients_to_list() {
    const recipeButton = document.getElementById("add");
    const recipeText = document.getElementById("recipe-p");

    if (!recipeButton || !recipeText) {
        console.error("Missing required elements");
        return;
    }

    // ✅ Set the first recipe automatically on load
    recipeText.textContent = current_cuisine;

    recipeButton.addEventListener("click", async () => {
        // Update list with current recipe
        updateIngredientsList(recipeText.textContent);

        // Move to the next cuisine
        counter++;
        if (counter >= british_cuisine.length) {
            counter = 0; // loop back to start
        }

        // Set the new current recipe
        current_cuisine = british_cuisine[counter];
        recipeText.textContent = current_cuisine;
    });
}

// ✅ Start automatically when page loads
window.addEventListener("DOMContentLoaded", add_ingredients_to_list);

export { add_ingredients_to_list };
