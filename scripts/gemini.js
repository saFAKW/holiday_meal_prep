//import dotenv from "dotenv";
//dotenv.config();

// Access the key
//const API_KEY = process.env.GEMINI_API_KEY;
//const API_KEY = "AIzaSyAGePYh6PX1JwXAWRFDbUupdeHEa9HQ8NY";
//const API_KEY = "AIzaSyB-exWSJJ91YNijAsp5KbmUrIAKxRBi9VI";
//const API_KEY = "AIzaSyDrY2kzzsaDXTH2ap-Rohea_qIU9S28bPs";
const API_KEY = "AIzaSyByg-uPjUJkgOD_kqwVzAaWJ4qBbVa82yM";
const MODEL_NAME = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

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
            const errorMessage = errorData.error?.message || 'Unknown error';
            
            // Check for quota errors specifically
            if (errorMessage.includes("quota") || errorMessage.includes("Quota exceeded")) {
                console.error("Quota error:", errorMessage);
                return `error Quota exceeded. The free tier allows 250 requests per day. Please wait for the quota to reset or check usage at https://ai.dev/usage?tab=rate-limit`;
            }
            
            throw new Error(`API request failed: ${errorMessage}`);
        }

        const data = await response.json();
        
        // Check if we have valid response data
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error('Invalid response format from API');
        }
        
        const text = data.candidates[0].content.parts[0].text;
        return text;

    } catch (error) {
        console.error("calling Gemini error:", error);
        return `error ${error.message}`;
    }
}

// Helper function to list available models (for debugging)
async function listAvailableModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`);
        const data = await response.json();
        console.log("Available models:", data);
        return data;
    } catch (error) {
        console.error("Error listing models:", error);
        return null;
    }
}

// Uncomment the line below and check browser console to see available models

export {callGeminiApi, listAvailableModels}