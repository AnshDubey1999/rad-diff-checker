import os
from flask import Flask, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(BASE_DIR, 'templates.db')
db = SQLAlchemy(app)


class Template(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    template_text = db.Column(db.String, nullable=False)


# Root route
@app.route('/')
def index():
    return jsonify(message="Hello, world!")


@app.route('/templates/<int:template_id>', methods=['GET'])
def get_template(template_id):
    '''
    Get a template by ID
    args:
        template_id: ID of the template to retrieve
    '''
    # Query the database for the template
    template: Template = Template.query.get(template_id)

    # If the template doesn't exist, return a 404 error
    if not template:
        abort(404, description=f"Template with ID {template_id} was not found")

    # Return the template as JSON
    return jsonify(id=template.id, templateText=template.template_text)


@app.errorhandler(404)
def not_found(e):
    '''
    Error handler for 404 errors
    '''
    return jsonify(error=str(e.description)), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
