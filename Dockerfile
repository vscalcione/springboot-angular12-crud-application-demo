FROM openjdk:8

COPY ./target/crudapp-backend-0.0.1-SNAPSHOT.jar crudapp-backend-0.0.1-SNAPSHOT.jar

CMD ["java","-jar","crudapp-backend-0.0.1-SNAPSHOT"]