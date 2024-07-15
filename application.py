from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def get_json():
    json_data = {"name": "Youna", "age": 18, "sex": "female"}
    return jsonify(json_data)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
