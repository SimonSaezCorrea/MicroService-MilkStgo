FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} planilladepago-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/planilladepago-service-0.0.1-SNAPSHOT.jar"]