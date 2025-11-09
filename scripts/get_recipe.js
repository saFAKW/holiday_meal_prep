import { calculateTime, calculateTotalCost } from './cost_calculation.js';
import { callGeminiApi } from './gemini.js';

const british_cuisine = [
    "Beans on Toast",
    "Full English Breakfast",
    "Eggs Benedict",
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
    const title = document.getElementById("food");
    
    if (!ingredientDisplay || !recipeDisplay || !title) {
        console.error("Missing required DOM elements");
        return;
    }
    
    // Use current counter value first, then increment for next time
    current_cuisine = british_cuisine[counter];
    console.log(`current_cuisine ${current_cuisine}`);
    
    counter++;
    if (counter >= british_cuisine.length) {
        counter = 0;
    }
    
    // Update title first, then use it for the prompt
    title.innerHTML = current_cuisine;
    const portions = document.getElementById("portions").value
    const prompt = `Provide a simple recipe for ${portions} poritions for ${current_cuisine} ${PROMPT}`;
    
    const recipe = await callGeminiApi(prompt);
    if(!recipe || recipe.startsWith("error")){    
        const errorMsg = recipe || "no results";
        ingredientDisplay.innerHTML = `<p style="color: red;">Error: ${errorMsg}</p>`;
        recipeDisplay.innerHTML = "";
        return;
    }
    
    const recipe_list = recipe.replace(/\n/g, ', ')
    const recipeHtml = recipe.replace(/\n/g, '<br>');
    const parts = recipeHtml.split("Recipe:");
    const ingredients_styled = markdownStyling(parts[0].replace(/^Ingredients:\s*/, ""));
    const recipes_styled = markdownStyling(parts[1]);
    ingredientDisplay.innerHTML = ingredients_styled;
    recipeDisplay.innerHTML = recipes_styled || "";
    const total_time = calculateTime(recipe_list)
    document.querySelector("#total-time").querySelector(".value").textContent = total_time
    const total_cost = calculateTotalCost(recipe_list)
    document.querySelector("#total-cost").querySelector(".value").textContent = total_cost

}; 

function markdownStyling(input) {
    console.log("styling")
    let html = input;

    // replace **text** with <em>text</em>
    html = html.replace(/\*\*(.*?)\*\*/g, '<em>$1</em>');

    // split into lines
    const lines = html.split(/\r?\n/);
    let result = '';
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // match bullet (- ) or numbered (1. 2. etc.)
        if (/^(-|\d+\.)\s+/.test(line)) {
            if (!inList) {
                result += '<ol>';
                inList = true;
            }
            result += '<li>' + line.replace(/^(-|\d+\.)\s+/, '') + '</li>';
        } else {
            if (inList) {
                result += '</ol>';
                inList = false;
            }
            result += line;
        }
    }

    if (inList) result += '</ol>'; // close if file ends mid-list

    return result;
}
