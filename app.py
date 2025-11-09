from flask import Flask, request, jsonify
from search_for_images import get_image_url  # Your existing function

app = Flask(__name__)

@app.route("/image")
def image():
    query = request.args.get("query")
    if not query:
        return jsonify({"url": ""})
    url = get_image_url(query)  # Returns URL string from your generator
    return jsonify({"url": url})

if __name__ == "__main__":
    app.run(debug=True)
