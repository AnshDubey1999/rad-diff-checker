# Use a lightweight version of the official Python image
FROM python:3.12.0-slim

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's code into the container
COPY . .

# Set Flask to run in development mode
ENV FLASK_ENV=development

# Expose port 5000 for the Flask app to listen on
EXPOSE 5000

# CMD ["sh", "-c", "python initialize_db.py && python app.py"]
CMD ["sh", "-c", "python app.py"]
