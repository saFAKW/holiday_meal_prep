import { callGeminiApi } from './gemini.js';
const PROMPT = `Output exactly two sections separated by a single blank line:

Ingredients:
- List each ingredient on its own line (one ingredient per line).

Recipe:
- Provide step-by-step instructions (numbered or bullet points).

Keep the total output within 400 tokens and do not include extra commentary.`
       
export async function show_recipe(){
    let text = "";
    const input = document.getElementById("food-name-input");
    const button = document.getElementById("get-recipe-btn");
    const display = document.getElementById("recipe-p");
    button.addEventListener("click", async () => {
        console.log("click the search button")
        if (!input.value.trim()) {
            display.textContent = "Please enter a food name.";
            return;
        }
        const prompt = `Please provide a simple recipe for ${input.value.trim()} ${PROMPT}`
        const recipe = await callGeminiApi(prompt);
        if(!recipe){    
            recipe = "no results"
        }
        const recipeHtml = recipe.replace(/\n/g, '<br>');
        display.innerHTML = recipeHtml;
    });
    
}
