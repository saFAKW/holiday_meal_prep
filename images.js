async function getImage() {
    const food = document.getElementById("food").value;
    const res = await fetch(`http://127.0.0.1:5000/get_image?food=${encodeURIComponent(food)}`);
    const data = await res.json();

    if (data.url) {
    document.getElementById("result").innerHTML =
        `<img src="${data.url}" alt="${food}" width="400">`;
    } else {
    document.getElementById("result").innerText = "No image found.";
    }
}