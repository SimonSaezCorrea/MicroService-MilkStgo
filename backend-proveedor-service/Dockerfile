FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} preoveedor-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/preoveedor-service-0.0.1-SNAPSHOT.jar"]