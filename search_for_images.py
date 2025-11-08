from flask import Flask, jsonify, request
import requests
from flask_cors import CORS


WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "holiday_meal_prep/1.0"

def search_commons_images(query, limit=5, namespace=None, width=800):
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|mime",
        "iiurlwidth": width,
        "format": "json",
        "formatversion": 2
    }
    if namespace is not None:
        params["gsrnamespace"] = namespace

    headers = {"User-Agent": USER_AGENT}
    try:
        resp = requests.get(WIKIMEDIA_API, params=params, headers=headers, timeout=10)
        resp.raise_for_status()
        data = resp.json()
    except Exception as e:
        print("Wikimedia request error:", e)
        return []

    pages = data.get("query", {}).get("pages", [])
    results = []
    for page in pages:
        imageinfo_list = page.get("imageinfo")
        if not imageinfo_list:
            continue
        info = imageinfo_list[0] or {}
        url = info.get("thumburl") or info.get("url")
        if not url:
            continue
        extmeta = info.get("extmetadata") or {}
        license_name = extmeta.get("LicenseShortName", {}).get("value") if extmeta.get("LicenseShortName") else None
        artist = extmeta.get("Artist", {}).get("value") if extmeta.get("Artist") else None
        results.append({
            "pageid": page.get("pageid"),
            "title": page.get("title"),
            "url": url,
            "mime": info.get("mime"),
            "license": license_name,
            "artist": artist
        })
    return results


def get_commons_image_for_food(food):
    if not food or not food.strip():
        return None

    queries = [
        food,
        f"{food} dish",
        f"{food} cooked",
        f"{food} recipe",
        f"{food} food"
    ]

    for q in queries:
        results = search_commons_images(q, limit=5, namespace=6, width=800)
        for r in results:
            if r.get("url"):
                return r

    for q in queries:
        results = search_commons_images(q, limit=3, namespace=None, width=800)
        for r in results:
            if r.get("url"):
                return r

    return None


#Flask API (no HTML rendering)
app = Flask(__name__)
CORS(app)

@app.route("/get_image")
def get_image():
    food = request.args.get("food", "").strip()
    if not food:
        return jsonify({"error": "missing 'food' parameter"}), 400
    image = get_commons_image_for_food(food)
    if not image:
        return jsonify({"error": "no image found"}), 404
    return jsonify(image)

@app.route("/hover.js")
def serve_hover_js():
    js_code = """
const hoverImage = "nutrition.jpg"; // Replace with image

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

  img.style.transition = "opacity 0.5s ease";

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
    """
    return Response(js_code, mimetype="application/javascript")

if __name__ == "__main__":
    app.run(debug=True)
