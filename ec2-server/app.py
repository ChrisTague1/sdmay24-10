from flask import Flask, request

app = Flask(__name__)

@app.route("/model-9", methods=["POST"])
def model_9():
    print("Hello")
