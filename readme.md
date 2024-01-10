# Portfolio Management System

## Description
This project is a web-based portfolio management system implemented using Docker containers. It enables users to showcase their skills and projects in a professional manner through a frontend website and provides backend functionality for adding, removing, and managing skills and projects. The project is implemented using a microservices architecture, with each service running in its own Docker container. The frontend is implemented using PHP, the backend is implemented using Node.js, and the database is implemented using MongoDB. MongoExpress is used to provide a web-based interface for managing the database. The project is deployed using Docker Compose, which allows all the services to be started with a single command.

## System Overview

The portfolio management system comprises the following components, each running in Docker containers:

- **Frontend**: The user interface of the portfolio website. It displays skills and projects retrieved from the backend through REST APIs.
- **Backend**: A Node.js server responsible for creating REST APIs to interact with the database. It also serves views for managing skills and projects.
- **Database**: MongoDB is used to store skill and project data.

## Getting Started

To set up the portfolio management system locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your-username/portfolio-management-system.git
   ```
2. Change to the project directory.
   ```bash
    cd portfolio-management-system
    ```
3. Start the Docker containers using Docker Compose.
    ```bash
    docker-compose up -d
    ```
4. Access the portfolio website in your web browser.
    ```
    http://localhost:80
    ```
5. Access the MongoExpress interface to manage the database.
    ```
    http://localhost:8081
    ``` 
6. Access the backend views to manage skills and projects.
    ```
    http://localhost:3000
    ```
7. To stop the Docker containers, run the following command:
    ```bash
    docker-compose down
    ```
## System Components

### Frontend
The frontend of the portfolio management system is implemented using PHP. It displays the skills and projects of the user in a professional manner. The frontend communicates with the backend through REST APIs to retrieve the data to be displayed.

### Backend
The backend of the portfolio management system is implemented using Node.js. It provides REST APIs for managing skills and projects, as well as serving views for adding, editing, and deleting skills and projects. The backend communicates with the MongoDB database to store and retrieve skill and project data.

### Database
The database of the portfolio management system is implemented using MongoDB. It stores the skill and project data of the user. The database is accessed by the backend server to store and retrieve data.

### MongoExpress
MongoExpress is a web-based interface for managing MongoDB databases. It provides a user-friendly interface for viewing and editing the data stored in the database. MongoExpress is used in this project to manage the skill and project data stored in the MongoDB database.

## Technologies Used

The portfolio management system is implemented using the following technologies:

- **Docker**: Containerization platform used to run the frontend, backend, and database components of the system.
- **Docker Compose**: Tool used to define and run multi-container Docker applications.
- **PHP**: Programming language used to implement the frontend of the portfolio website.
- **Node.js**: JavaScript runtime used to implement the backend server.
- **MongoDB**: NoSQL database used to store skill and project data.
- **MongoExpress**: Web-based interface for managing MongoDB databases.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have any suggestions for improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```
MIT License
```

## Contributors
- [Abdul Al Mahmud Riaz](github.com/Riaz-Mahmud)