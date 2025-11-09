async function getImage() {
    const food = document.getElementById("food").textContent.trim();
    const res = await fetch(`http://127.0.0.1:5000/get_image?food=${encodeURIComponent(food)}`);
    const data = await res.json();

    if (data.url) {
    document.getElementById("result").innerHTML =
        `<img src="${data.url}" alt="${food}" width="400">`;
    } else {
    document.getElementById("result").innerText = "No image found.";
    }
}
// Auto-fetch image when recipe name changes dynamically
document.addEventListener("DOMContentLoaded", () => {
    const foodEl = document.getElementById("food");
    const resultDiv = document.getElementById("result");

    // Fetch an image for the initial recipe when page loads
    getImage();

    // Watch for changes to the text of the #food element
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "childList" || mutation.type === "characterData") {
                getImage();
                break;
            }
        }
    });

    observer.observe(foodEl, {
        characterData: true,
        childList: true,
        subtree: true
    });
});
