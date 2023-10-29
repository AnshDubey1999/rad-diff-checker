from flask import Flask, jsonify, abort
from werkzeug.exceptions import NotFound

app = Flask(__name__)


@app.route('/')
def index():
    return jsonify({'message': 'Hello World!'})


@app.route('/get-template/<int:template_id>', methods=['GET'])
def get_template(template_id):
    pass
