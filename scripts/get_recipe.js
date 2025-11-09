import { callGeminiApi } from './gemini.js';

const british_cuisine = [
    "Full English Breakfast",
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
]

const PROMPT = `Output exactly two sections separated by a single blank line:

Ingredients:
- List each ingredient on its own line (one ingredient per line).

Recipe:
- Provide step-by-step instructions (numbered or bullet points).

Keep the total output within 400 tokens and do not include extra commentary.`

let counter = 0
let current_cuisine = british_cuisine[counter]

export async function show_recipe(){
    let text = "";
    const ingredientDisplay = document.getElementById("ingredients-p");
    const recipeDisplay = document.getElementById("recipe-p");
    counter++;
    if (counter >= british_cuisine.length) {
        counter = 0;
    }
    current_cuisine = british_cuisine[counter];
    console.log(`current_cuisine ${current_cuisine}`)
     const title = document.getElementById("food-name-title");
    const prompt = `Please provide a simple recipe for ${title.textContent} ${PROMPT}`
    const recipe = await callGeminiApi(prompt);
    if(!recipe){    
        recipe = "no results"
    }
    const recipeHtml = recipe.replace(/\n/g, '<br>');
    const parts = recipeHtml.split("Recipe:");
    ingredientDisplay.innerHTML = parts[0];
    recipeDisplay.innerHTML = parts[1];
    title.innerHTML = current_cuisine
   
}; 

