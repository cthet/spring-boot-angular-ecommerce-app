# spring-boot-ecommerce-app

E-commerce project developed using Spring Boot and Angular<br>

## Prerequisites
In order to run this project, you'll need to have the following installed:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Project with Docker Compose

1. **Clone the Repository**
    
    ```bash
    git clone https://github.com/cthet/spring-boot-angular-ecommerce-app.git
    ```

2. **Build and Launch the Containers**

    Use Docker Compose to build and launch the containers:

    ```bash
    docker-compose up --build
    ```

    The `--build` option is used to build the images before starting the containers. If you've already built the images, you can simply use `docker-compose up`
    

**FEATURES**

- Regular username/password authentication.
- Stores user information in the PostgreSQL database.
- Stores authentication details, such as token information, in localStorage.
- Select filters to display products based on selections (gender, brands, apparel categories).
- Sort products by price.
- Pagination to display a maximum number of products on a single page.
- Allow creation/deletion of user addresses.
- Stores information like cart details in localStorage to persist page refresh.
- Payment service using Stripe's API to purchase products.
- Display orders list for the user.
- Responsive design for all devices.


**TOOLS USED**
- **Web-App:** Angular 15, RxJs, Ngrx, Angular Material
- **Rest API:** Java 17, Spring Boot (v3.1.0), Spring Data, JPA/Hibernate, JPQL, Lombok, Mapstruct, Maven
- **Unit test:** JUnit, Mockito
- **DBMS:** PostgreSQL
- **Security:** Spring Security, JWT
- **Doc**: Swagger (springdoc-openapi)
- **CDN:** AWS S3: server for storing images 
- **Stripe:** Payment service API to handle user payment requests.
- **Docker-Compose:** Easy way to bring up the application using containerization and behaves similarly in the production environment.