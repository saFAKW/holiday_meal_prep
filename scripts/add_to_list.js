
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
                console.log(`trimmedLine ${trimmedLine}`)
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
export function add_to_basket(){

    const recipeButton = document.getElementById("add-to-basket");
    const recipeText = document.getElementById("recipe-p");
    recipeButton.addEventListener("click", async () => {
        updateIngredientsList(recipeText.textContent);
    });
}
