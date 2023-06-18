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

- Regular Username/Password authentication.
- Stores user information in the Postgres database.
- Select filters to display products based on the selections (brands, categories).
- Sort products by prices.
- Pagination to display max products on a single page.
- Stores authentication details like token information in localstorage.
- Store cart's product information in cookies.
- Payment service using Stripe's API to buy products.
- Responsiveness support for all devices.


**TOOLS USED**
- **Rest API**
- **Back-end:** Spring (Boot, Data), JPA / Hibernate, PostgreSQL, JUnit, Mockito, Maven
- **Front-end:** Angular 15, Ngrx, Angular Material
- **Security:** JWT
- **AWS S3:** Server for storing product images. 
- **Stripe:** Payment service API to handle user payment requests.
- **Docker-Compose:** Easy way to bring up the application using containerization and behaves similarly in the production environment.