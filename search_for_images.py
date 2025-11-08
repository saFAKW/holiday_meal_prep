import requests

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
        response = requests.get(url, params=params, timeout=8)
        response.raise_for_status()
        data = response.json()
    except Exception:
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

    for q in queries:
        results = search_commons_images(q, limit=5, namespace=6, width=800)
        # prefer first result with a usable URL
        for r in results:
            url = r.get("url")
            if url and any(url.lower().endswith(ext) for ext in (".jpg", ".jpeg", ".png", ".gif", ".svg")):
                return r
    # fallback: try a broader search without namespace
    for q in queries:
        results = search_commons_images(q, limit=3, namespace=None, width=800)
        for r in results:
            url = r.get("url")
            if url and any(url.lower().endswith(ext) for ext in (".jpg", ".jpeg", ".png", ".gif", ".svg")):
                return r

    return None