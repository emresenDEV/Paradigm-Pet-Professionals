# Paradigm Pet Professionals

WGU C773 User Interface Design Project

The purpose of this project is to create a user interface for a dog training business. The user interface will be used by the business owner to track client information, pet information, and gain customer information to schedule consulting services.

WGU provided a scenario which the student is to work on this project as if this were real-world experience. The stakeholder had website which was in desperate need of updates and fixes in order to build trust with future clientele.

As a student, I will be using this project to demonstrate my ability to create a user interface that is easy to use and meets the needs of the business owner. Taking the stakeholder's' needs into account, I will be creating a user interface that is easy to navigate and appealing to the eye. WGU provides a website that needs to be updated. It has broken links, missing images, and is not mobile-friendly. The website is also not ADA-compliant. The website needs to be updated to meet the needs of the business owner and the customers.

Pictures, videos, and color schemes were predetermined per the requirements of the project (Western Governors University, 2022).

The user interface was designed with several User Personas in mind. The personas are as follows:

All Site Visitors: landing on the home page are interested in an overview of what the company does. First-time visitors will often leave the site completely if the layout does not easily identify the information available on the site and link to its pages within the website. Users landing on the home page view the site using desktop and handheld devices.

Cat Owners: are looking to understand the feeding needs for their cat based on type of cat, age, diet, and other preferences. Many users use a desktop device for their research. They are interested in recommendations about the best foods to meet their cat’s health at any stage.

Dog Owners: are interested in the activity needs of their puppy throughout its lifetime. They are often viewing the website from a handheld device as they are working with their puppy. They want to understand how play can support the dog’s health and are interested in recommendations about pet toys that encourage physical activity.

Bird Owners: are interested in the relational needs of their bird to ensure proper well-being. These owners often view the site using desktop devices.

The website content is predetermined per the requirements of the project (Western Governors University, 2022)- as you would expect from a real-world project.

All of the code in this project was written by Monica Nieckula (www.mrez.dev) and no templates were used. This website is compliant with ADA and WCAG standards.

# React Conversion

The initial project is a simple landing page. The project has been converted to the React Framework and uses Python and Flask.

## Backend Instructions (Flask)

**Setting up the Frontend:**

### **Backend (Flask) Setup and Startup**

1. **Ensure Python and Flask are Installed**
   * Ensure you have Python installed, in terminal:

     ```
     python3 --version
     ```
   * Install Flask and necessary dependencies, in terminal:

     ```
     pip install flask flask_sqlalchemy flask_migrate flask_cors
     ```
2. **Activate the Virtual Environment**
   * Navigate to the backend directory and activate the virtual environment, in terminal, from root directory:

     ```
     cd backend
     source venv/bin/activate
     ```
3. **Initialize the Database**
   * Run the following commands to set up the database:

     ```
     flask db init
     flask db migrate -m "Initial migration"
     flask db upgrade
     ```
4. **Start the Flask Server**
   * Run the Flask application:
     ```
     flask run
     ```
   * The server will be available at `http://127.0.0.1:5000/`.

### Frontend Instructions (React)

1. **Ensure Node.js and npm are Installed**
   * Verify the installation of Node.js and npm:
     ```
     node --version
     npm --version
     ```
2. **Navigate to the Frontend Directory**
   * Navigate to the React project directory:
     ```
     cd frontend
     ```
3. **Install Dependencies**
   * Install all necessary dependencies, including React Router:
     ```
     npm install
     npm install react-router-dom
     ```
4. Start the React Application
   * Run the React development server:

     ```
     npm start
     ```
     The app will be accessible at `http://localhost:3000/`

     # Lessons Learned:
