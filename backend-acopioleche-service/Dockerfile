FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} acopioleche-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/acopioleche-service-0.0.1-SNAPSHOT.jar"]