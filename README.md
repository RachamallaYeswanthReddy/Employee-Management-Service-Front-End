


# Student Management System

## Overview

This project is a comprehensive Student Management System developed using a Java Full Stack approach. The technologies used include HTML, CSS, JavaScript, AngularJS, Node.js, Java, Spring Boot, and MySQL.

![Project Logo](https://raw.githubusercontent.com/RachamallaYeswanthReddy/Student-Management-System/main/assets/logo.png)

https://github.com/RachamallaYeswanthReddy/Student-Management-System/assets/91588050/8c8d3bca-ad2d-434d-9772-e912f9ada04d


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- AngularJS: Install via npm using `npm install -g angular`
- Java Development Kit (JDK): [Download and Install JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- Spring Boot: [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-system-requirements)
- MySQL: [Download and Install MySQL](https://dev.mysql.com/downloads/)
- Git: [Download and Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Project Structure

The project is structured into two main components: frontend and backend.

- **Frontend:**
  - The `frontend` directory contains the AngularJS application.
  - Use the `src/app` directory for AngularJS components, services, and views.

- **Backend:**
  - The `backend` directory contains the Spring Boot application.
  - The backend follows a RESTful architecture with controllers, services, and a repository for student entities.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RachamallaYeswanthReddy/Student-Management-Service.git
   ```

2. **Database Setup:**

   - Create a MySQL database named `student_management_system`.
   - Update the database configuration in `student-management-system/backend/src/main/resources/application.properties`.

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/student_management_system 
   spring.datasource.username=root
   spring.datasource.password=root_password
   ```
   You can rename student_management_system with your own schema name in the mysql DB and Replace root and root_password with your username and password Respectively.
    
4. **Backend Setup:**

   ```bash
   cd student-management-system/backend
   ./mvnw spring-boot:run
   ```

   - The Spring Boot backend will be running at [http://localhost:8080](http://localhost:8080).

5. **Frontend Setup:**

   ```bash
   cd student-management-system/frontend
   npm install
   ng serve
   ```

   - Access the AngularJS application at [http://localhost:4200](http://localhost:4200).

## CRUD Operations

The application provides CRUD operations for managing student records.

- **Create:** Click on the "Add Student" button to add a new student.

- **Read:** View the list of students on the homepage.

- **Update:** Click on the "Edit" button to update student information.

- **Delete:** Click on the "Delete" button to remove a student from the system.

## API Documentation

The backend exposes RESTful APIs for CRUD operations. The API documentation can be accessed at [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html).

## Testing

Both frontend and backend components are equipped with unit tests. Execute tests using the following commands:

- Frontend:

  ```bash
  cd student-management-system/frontend
  ng test
  ```

- Backend:

  ```bash
  cd student-management-system/backend
  ./mvnw test
  ```

## ScreenShort

![image](https://github.com/RachamallaYeswanthReddy/Student-Management-System/assets/91588050/5b291f87-80a4-40bc-b75a-6aafacdb735c)





## Additional Information

  - The AngularJS frontend is running on [http://localhost:4200](http://localhost:4200).
  - The Spring Boot backend is running on [http://localhost:8080](http://localhost:8080).

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---
