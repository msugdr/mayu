from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def main_page():
    json_data = {"name": "Youna", "age": 18, "sex": "female"}
    return jsonify({"language": "python"})
