FROM maven:3.9.2-amazoncorretto-17 as build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src .
RUN mvn package

FROM tomcat:10
COPY --from=build /app/target/ecommerce.war ${CATALINA_HOME}/webapps/ROOT.war
EXPOSE 8080
ENTRYPOINT ["catalina.sh", "run"]