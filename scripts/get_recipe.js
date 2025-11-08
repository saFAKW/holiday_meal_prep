import { callGeminiApi } from './gemini.js';

export async function show_recipe(){
    let text = "";
    const input = document.getElementById("food-name-input");
    const button = document.getElementById("get-recipe-btn");
    const display = document.getElementById("recipe-p");
    button.addEventListener("click", async () => {
        if (!input.value.trim()) {
            display.textContent = "Please enter a food name.";
            return;
        }
        const prompt = `Please provide a simple recipe for ${input.value.trim()}. Include a list of ingredients and step-by-step instructions. it must within 400 tokens without any `
        const recipe = await callGeminiApi(prompt);
        if(!recipe){    
            recipe = "no results"
        }
        display.textContent = recipe;
    });
    
}
