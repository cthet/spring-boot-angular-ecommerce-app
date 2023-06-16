FROM maven:3.9-eclipse-temurin-17 as build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src src
RUN mvn clean install -DskipTests

FROM amazoncorretto:17
WORKDIR /app
COPY --from=build /app/target/ecommerce.jar /app/ecommerce.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/ecommerce.jar"]
