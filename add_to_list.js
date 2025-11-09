const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

function addToWishlist(name, img) {
    // Check duplicates
    if (wishlist.some(item => item.name === name)) {
        alert("This dish is already in your wishlist!");
        return;
    }
    wishlist.push({name, img});
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}

function renderWishlist() {
    let panel = document.getElementById("wishlist-panel");
    if (!panel) {
        panel = document.createElement("div");
        panel.id = "wishlist-panel";
        panel.className = "ingredients-sheet";
        panel.innerHTML = `
            <h2>My Wishlist</h2>
            <button class="close-btn">&times;</button>
            <div id="wishlist-items"></div>
        `;
        document.body.appendChild(panel);

        panel.querySelector(".close-btn").addEventListener("click", () => {
            panel.classList.remove("open");
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "toggle-btn";
        toggleBtn.textContent = "Wishlist";
        toggleBtn.onclick = () => panel.classList.add("open");
        document.body.appendChild(toggleBtn);
    }

    const itemsDiv = document.getElementById("wishlist-items");
    itemsDiv.innerHTML = "";
    wishlist.forEach(item => {
        const div = document.createElement("div");
        div.className = "ingredient-item";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "10px";

        div.innerHTML = `
            <img src="${item.img}" width="60" style="border-radius:5px;">
            <span>${item.name}</span>
        `;
        itemsDiv.appendChild(div);
    });
}

// Load wishlist on page load
document.addEventListener("DOMContentLoaded", renderWishlist);
