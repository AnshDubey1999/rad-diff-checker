from flask import Flask, jsonify, abort

app = Flask(__name__)


@app.route('/get-template/<int:template_id>', methods=['GET'])
def get_template(template_id):
    pass
