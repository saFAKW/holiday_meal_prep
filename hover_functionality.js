const hoverImage = "nutrition_info.jpg"; // Replace with nutrition image

document.getElementById("searchBtn").addEventListener("click", async () => {
  const food = document.getElementById("food").value.trim();
  const res = await fetch(`/get_image?food=${encodeURIComponent(food)}`);
  const data = await res.json();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (data.error) {
    resultDiv.innerText = data.error;
    return;
  }

  const img = document.createElement("img");
  img.src = data.url;
  img.dataset.original = data.url;
  img.dataset.hover = hoverImage;

  img.addEventListener("mouseenter", () => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = img.dataset.hover;
      img.style.opacity = "1";
    }, 300);
  });

  img.addEventListener("mouseleave", () => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = img.dataset.original;
      img.style.opacity = "1";
    }, 300);
  });

  resultDiv.appendChild(img);
});
