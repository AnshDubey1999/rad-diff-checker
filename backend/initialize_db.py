from app import app, db, Template

sample_template_text = """
EXAM:
CT [_laterality_] [Generic Bone], [without or with] IV contrast

CLINICAL HISTORY:

TECHNIQUE:
Axial images were acquired through the [_laterality_] [generic bone]
[without or with] IV contrast. Reformatted images were reviewed.
Dose reduction technique was used including one or more of the following:
automated exposure control, adjustment of mA and kV according to patient size,
and/or iterative reconstruction.

COMPARISON:
None provided.

FINDINGS:

BONES:
No acute fracture or focal osseous lesion.

JOINTS:
No dislocation. The joint spaces are normal.

SOFT TISSUES:
The soft tissues are unremarkable.

IMPRESSION:

1. No acute osseous abnormality.
"""

# Wrap the following code in an app context so that we can access the database
with app.app_context():
    # Create the database and the tables
    db.create_all()
    # Check if sample data already exists
    existing_template = db.session.query(Template).first()
    if not existing_template:
        # Add sample templates
        sample1 = Template(template_text=sample_template_text)

        db.session.add(sample1)
        db.session.commit()
        print("Added sample template")
    else:
        print("Sample template already exists")
