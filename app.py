from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
    json_data = {"name": "Youna", "age": 18, "sex": "female"}
    return jsonify(json_data)
