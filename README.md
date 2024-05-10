# Garden Assistant

Garden Assistant is a full-stack web application designed to assist users in managing their gardens and nurturing their plants with care. Built with Angular, Spring Boot, and MongoDB, this project offers a seamless user experience and robust functionality.

# Features
**Garden Management:** Users can effortlessly manage their gardens, including adding, editing, and deleting plants, as well as tracking watering schedules and growth progress.
<br/>
**Plant Gallery:** Explore a vast collection of plants in the plant gallery, which serves as a source of inspiration and knowledge for users interested in learning more about different plant species and their care requirements.
**User Authorization System**: Implemented using Spring Security, allow user to login and sign up for better experience to manage their garden

Images of the website:
Landing Page:
![image](https://github.com/tonglin2003/GardenAssistant/assets/91768176/d56bac3a-8912-460f-ac75-70f7238371ba)


Plant Gallery Page:
<img width="1254" alt="Screenshot 2024-05-10 at 12 08 28 PM" src="https://github.com/tonglin2003/GardenAssistant/assets/91768176/016670cb-bed5-48bf-a678-93e34bbb3091">

User Garden Management Page:
<img width="1258" alt="Screenshot 2024-05-10 at 12 29 52 PM" src="https://github.com/tonglin2003/GardenAssistant/assets/91768176/a2fa2df5-9fbb-40ba-8e8a-71d0f0aed69a">

# How to set up:
Tools needed: IDE environment of your choice, Docker (The most important tool for simple set up)
<br/>

1. Clone the repo to your local IDE, using the command
```
git clone git@github.com:tonglin2003/GardenAssistant.git
```

2. Inside `GardenAssistant/src/main/resources` create a new properties file called, `application-security.properties`
```
spring.data.mongodb.host=mongo
spring.data.mongodb.port=28017
spring.data.mongodb.database=gardenAssistant
frontendUrl=http://localhost:4200
jwt.secretKey=575a6f8650befc93d4943eea215fcd04814f090f9ab49392f9961b8d7d0ef4c6
```
For jwt.secretKey, generate a new key with JWT Web Token so just use the one above

3. Inside `GardenAssistant/gardenAssistantFrontend/gardenFrontend/environments/environment.ts` add the following code:
```
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8081',
  plantApiKey: '<the api key for https://perenual.com/>'
}
```
Register an account for "https://perenual.com/" Then it would give an api key for the plant API. Copy the api key to the plantApiKey in the code above.

4. Run Maven Package in the IDE or command line. If using IntelliJ, just simply run the Maven Package.

5. Create Images for frontend and backend and mongoDB with Docker, so make sure Docker is running on your end.
- **Mongodb**: `docker pull mongo`

- **Spring Boot**: At the root level of the GardenAssistant folder, there is the Dockerfile for spring boot, and run the command in the terminal: `docker build -t spring-boot-demo:latest .`

- **Angular**: direct into the `GardenAssistant/gardenAssistantFrontend/gardenFrontend` directory, where the Dockerfile of angular is located: `docker build -t angular-frontend:latest .`


6. Docker Compose Up. Direct to the root level of the GardenAssistant folder, and compose it up, so we can have our application running at local
```
docker compose up
```



