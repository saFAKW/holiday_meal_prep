import { show_recipe } from './get_recipe.js';

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

// Note: counter is managed in get_recipe.js

function updateIngredientsList() {
    const sheet = document.getElementById("ingredientsSheet");
    const ingredientDisplay = document.getElementById("ingredients-p");
    
    if (!sheet || !ingredientDisplay) {
        console.error("error getElementById - missing ingredientsSheet or ingredients-p");
        return;
    }

    // Get the ingredients text from the display element (it already contains just the ingredients section)
    const ingredientsHtml = ingredientDisplay.innerHTML;
    const ingredientsText = ingredientsHtml.replace(/<br>/gi, '\n').replace(/<[^>]*>/g, '');
    
    // Find where ingredients start (after "Ingredients:")
    let startIndex = ingredientsText.indexOf("Ingredients:");
    if (startIndex === -1) {
        console.warn("cannot find 'Ingredients:' mark");
        const errorItem = document.createElement("div");
        errorItem.className = "ingredient-item";
        errorItem.innerHTML = `<p style="color: #7f8c8d;">Could not parse ingredients from recipe.</p>`;
        sheet.appendChild(errorItem);
        return;
    }

    // Extract the ingredients block (everything after "Ingredients:")
    const ingredientsBlock = ingredientsText.substring(startIndex + "Ingredients:".length).trim();
    
    // Split by lines and filter for ingredient lines (those starting with "-" or containing ingredient text)
    const lines = ingredientsBlock.split('\n');
    let ingredientsFound = 0;

    for (const line of lines) {
        let trimmedLine = line.trim();
        
        // Remove leading "- " or "-" if present
        if (trimmedLine.startsWith('- ')) {
            trimmedLine = trimmedLine.substring(2).trim();
        } else if (trimmedLine.startsWith('-')) {
            trimmedLine = trimmedLine.substring(1).trim();
        }
        
        // Skip empty lines
        if (!trimmedLine) {
            continue;
        }
        
        // Skip if it looks like it's part of the recipe section (contains "Recipe:")
        if (trimmedLine.includes("Recipe:")) {
            break;
        }
        
        console.log(`Adding ingredient: ${trimmedLine}`);
        ingredientsFound++;

        const newItem = document.createElement("div");
        newItem.className = "ingredient-item";
        newItem.innerHTML = `<strong>${trimmedLine}</strong>`;
        sheet.appendChild(newItem);
    }

    if (ingredientsFound === 0) {
        const noItem = document.createElement("div");
        noItem.className = "ingredient-item";
        noItem.innerHTML = `<p style="color: #7f8c8d;">No ingredients listed for this recipe.</p>`;
        sheet.appendChild(noItem);
    }
}

// Track if listeners have been added to prevent duplicates
let listenersAdded = false;

function add_ingredients_to_list() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', add_ingredients_to_list);
        return;
    }

    const addButton = document.getElementById("add");
    const skipButton = document.getElementById("skip");
    const recipeText = document.getElementById("recipe-p");

    if (!addButton || !recipeText || !skipButton) {
        console.error("Missing required elements:", { addButton, recipeText, skipButton });
        // Retry after a short delay in case elements aren't ready yet
        setTimeout(add_ingredients_to_list, 100);
        return;
    }

    // Only add listeners once
    if (listenersAdded) {
        return;
    }
    
    listenersAdded = true;
    console.log("Adding event listeners to buttons");

    addButton.addEventListener("click", async () => {
        alert("added to shopping list");
        console.log("click add to basket");
        updateIngredientsList();
        await show_recipe();
    });
    
    /*skip button functionality*/
    skipButton.addEventListener("click", async () => {
        alert("skipped");
        await show_recipe();
    });
}

export { add_ingredients_to_list };