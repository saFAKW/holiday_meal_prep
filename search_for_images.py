from flask import Flask, jsonify, request
import urllib.request
import urllib.parse
import json

# Wikimedia Commons Image Search Functions

def search_commons_images(query, limit=5, namespace=None, width=800):
    """
    Search Wikimedia Commons and return list of image dicts.
    If namespace=6 is passed, search is restricted to Files (images).
    """
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
        "iiurlwidth": width,
        "format": "json"
    }
    if namespace is not None:
        params["gsrnamespace"] = namespace

    try:
        # Encode and send request
        full_url = f"{url}?{urllib.parse.urlencode(params)}"
        with urllib.request.urlopen(full_url, timeout=8) as response:
            data = json.loads(response.read().decode())
    except Exception as e:
        print("Error fetching from Wikimedia:", e)
        return []

    pages = data.get("query", {}).get("pages", {})
    results = []
    for page in pages.values():
        info = page.get("imageinfo", [{}])[0]
        results.append({
            "title": page.get("title"),
            "url": info.get("thumburl") or info.get("url"),
            "license": info.get("extmetadata", {}).get("LicenseShortName", {}).get("value"),
            "artist": info.get("extmetadata", {}).get("Artist", {}).get("value"),
            "extmetadata": info.get("extmetadata", {})
        })
    return results


def get_commons_image_for_food(food):
    """
    Return a single best image dict for the given food name (or None).
    Tries several query variations and restricts search to File namespace.
    """
    if not food or not food.strip():
        return None

    # query variations to improve chances
    queries = [
        food,
        f"{food} dish",
        f"{food} cooked",
        f"{food} recipe",
        f"{food} food"
    ]

    # Try restricted namespace (images only)
    for q in queries:
        results = search_commons_images(q, limit=5, namespace=6, width=800)
        for r in results:
            url = r.get("url")
            if url and any(url.lower().endswith(ext) for ext in (".jpg", ".jpeg", ".png", ".gif", ".svg")):
                return r

    # Fallback: broader search without namespace restriction
    for q in queries:
        results = search_commons_images(q, limit=3, namespace=None, width=800)
        for r in results:
            url = r.get("url")
            if url and any(url.lower().endswith(ext) for ext in (".jpg", ".jpeg", ".png", ".gif", ".svg")):
                return r

    return None


# Flask Web API
app = Flask(__name__)

@app.route("/get_image")
def get_image():
    food = request.args.get("food")
    image = get_commons_image_for_food(food)
    return jsonify(image or {})


if __name__ == "__main__":
    # Run the Flask app locally
    app.run(debug=True)
