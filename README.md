# Welcome to RadDiffChecker

## Snaps/Videos

![Screen Shot 2023-10-31 at 2 43 10 AM](https://github.com/AnshDubey1999/rad-diff-checker/assets/43154989/31a7ea83-d441-48a0-9ee0-ae01368b8773)

![Screen Shot 2023-10-31 at 2 39 29 AM](https://github.com/AnshDubey1999/rad-diff-checker/assets/43154989/6beb133c-7d50-45d9-b585-603bb589c071)

https://github.com/AnshDubey1999/rad-diff-checker/assets/43154989/124a844d-ec37-4e7a-bff6-37f39989fc4c


## Introduction
 - Given a Report ID and report text, if the backend flask API finds a report with the given id, it will show the difference between the input and the output file.
 - If the report ID was not found, it will display an appropriate toast for the same. 
  
## Technologies
### Backend:
- **Flask**: For backend API
- **SQLite**: For storing sample data (could've hardcoded but this is good for scalability in the future)

### Frontend:
- **NextJS**: For UI
- **Jotai/Jotai Devtools**: For state management/visualizing state
- **Tanstack query**: For API-related advantages (optimizations like caching, easy status handling, auto-refetch n times on errors in case of unknown issues)
- **Axios**: For making API calls

### Others:
- **Docker**: For containerizing the app

## Steps to run the app
### Using Docker
- Install Docker (https://docs.docker.com/engine/install/)
- Navigate to the root directory (one containing docker-compose.yml)
- Run `docker-compose up --build`
- Wait for both the containers to be built (if you see in the logs "Serving flask app .." and also "Ready in ... s" means both the app have been built)
- Access the UI at http://localhost:3000 (make sure nothing is running on that port). 

- **Note** that it may take up a while to first bundle the application even after it's ready when you try to access it. 
- **Another note**: Initially, only report with ID = 1 is defined. Once you input 1, add other inputs and Find difference , because of the optimized bundle it may not have bundled the second page leading to a weird behaviour of not navigating the user to the next page. In that case, just reload the app and wait for the compilation of the 2nd page to be over. 

### Using Repository (Recommended for the best experience):
- Clone this repository.
- Make sure you have latest NodeJS installed.
- First, navigate to the backend folder and create a virtual environment of your choice. (For mac: `python3 -m venv .venv`)
- Activate the virtual environment. (For mac: `source .venv/bin/activate`)
- Install the required packages: (`pip3 install -r requirements.txt`)
- Set environment variables in the directory (run on terminal directly): `export FLASK_APP=app.py` and `export FLASK_ENV=development`
- Run `flask run`. This launches the backend.
- Navigate to the `/frontend/rad-diff-checker` folder where you see `package.json`.
- Run `npm install` for installing all dependencies.
- Run `npm start` for running the application.
- Access it on http://localhost:3000


## Architectural Notes
### Backend
- There is not much here. Error handling/main controller/DB model definitions are all in `app.py`.
- `initialize_db.py` is mainly for initialization. Not needed to run after the first time as I am shipping the app with it (so tiny).

### Frontend
Main core of the app is in 3 directories inside `src` 

- `atoms`: Stores Jotai atoms. This is mainly used for atomic state management. (Storing things like API responses/status/main inputs like report ids).
- `api`: API call functions. Basically, integration with server-related functions are here.
- `app`: Typical NextJS app architecture. 


Additionally, one would already know but just for all viewers:
- `app/hooks`: Contains some abstracted hooks used in other components.
- `app/diffcheck`: Contains second page (diff checker) components
- `app/page.tsx` and `app/layout.tsx` contains the starting points/provider wrappers.
- `app/components`: Contains the components that make up the main page.

⽕⽕⽕ ENJOY! ⽕⽕⽕
