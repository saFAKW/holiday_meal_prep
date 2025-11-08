import { callGeminiApi } from './gemini.js';

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
]

const PROMPT = `Output exactly two sections separated by a single blank line:

Ingredients:
- List each ingredient on its own line (one ingredient per line).

Recipe:
- Provide step-by-step instructions (numbered or bullet points).

Keep the total output within 400 tokens and do not include extra commentary.`

const counter = 0
const current_cuisine = british_cuisine[counter]

export async function show_recipe(){
    let text = "";
    const input = current_cuisine;
    const display = document.getElementById("recipe-p");
    const title = document.getElementById("title");

    const prompt = `Please provide a simple recipe for ${input.value.trim()} ${PROMPT}`
    const recipe = await callGeminiApi(prompt);
    if(!recipe){    
        recipe = "no results"
    }
    const recipeHtml = recipe.replace(/\n/g, '<br>');
    display.innerHTML = recipeHtml;
    title.innerHTML = current_cuisine

    recipeButton.addEventListener("click", async () => {
        // Move to next item
        counter++;
        if (counter >= british_cuisine.length) {
            counter = 0; // loop back to start if reached the end
        }
        current_cuisine = british_cuisine[counter];
    });

}; 

