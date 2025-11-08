import requests

def search_commons_images(query, limit=5):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
        "iiurlwidth": 400,      
        "format": "json"
    }

    response = requests.get(url, params=params)
    data = response.json()
    pages = data.get("query", {}).get("pages", {})

    results = []
    for page in pages.values():
        info = page.get("imageinfo", [{}])[0]
        results.append({
            "title": page.get("title"),
            "url": info.get("url"),
            "license": info.get("extmetadata", {}).get("LicenseShortName", {}).get("value"),
            "artist": info.get("extmetadata", {}).get("Artist", {}).get("value"),
        })
    return results
