const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = "AIzaSyAGePYh6PX1JwXAWRFDbUupdeHEa9HQ8NY";
const MODEL_NAME = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

function giveFunctionToButton2(){
    let count = 0;
    const button = document.getElementById("btn2");
    const prompt = document.getElementById("text");

    button.addEventListener("click", async () => {
        display.textContent = "waiting...";
        const responseText = await callGeminiApi(prompt);
        display.textContent = responseText;
    });
}
export {giveFunctionToButton2}

async function callGeminiApi(prompt) {
    const requestBody = {
        contents: [
            { parts: [{ text: prompt }] }
        ],
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.8,
            topK: 40
        }
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API request failed: ${errorData.error.message}`);
        }

        const data = await response.json();
        
        const text = data.candidates[0].content.parts[0].text;
        return text;

    } catch (error) {
        console.error("calling Gemin error:", error);
        return `error ${error.message}`;
    }
}