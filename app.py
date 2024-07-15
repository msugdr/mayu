from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def main_page():
    return "Hello!!"
