# Start with a base image containing Java runtime
FROM openjdk:17-jdk-alpine

# Copy the JAR file from the target directory to the Docker image
COPY target/D387_sample_code-0.0.2-SNAPSHOT.jar /app/D387_sample_code-0.0.2-SNAPSHOT.jar

# Set the working directory inside the image
WORKDIR /app

# Expose the port used by your application (adjust if necessary)
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "D387_sample_code-0.0.2-SNAPSHOT.jar"]
