## Section C

### C1a

**Prompt**: Build resource bundles for both English and French (languages required by Canadian law).
            Include a welcome message in the language resource bundles.

-File: 'welcome.properties'
- Line: 1
    -Change: Resource bundle welcome created

-File: 'welcome_en_US.properties'
- Lines 1-2
    -Changes: Added hello=hello and welcomeMessage=Welcome to the Landon Hotel as key pairs.

-File: 'welcome_fr_CA.properties'
- Lines 1-2
  -Changes: Added hello=bonjour and welcomeMessage=Bienvenue à l'hôtel Landon as key pairs.

### C1b

**Prompt**: Display the welcome message in both English and French by applying 
            the resource bundles using a different thread for each language.

File: 'DisplayMessage.java'
- Lines 1-3
    -Changes: Package and import statements.
- Lines 5-11
  - Changes: Class and constructor declarations.
- Lines 13-19
  - Changes: Defined getMessage() to retrieve the stored welcome message based on locale.
- Lines 21-25
  - Changes: Prints result of getMessage() to console.

File: 'D387SampleCodeApplication.java'
- Lines 7-9
  - Changes: Imported Locale and DisplayMessage
- Lines 16-19
  - Changes: Created new DisplayMessage objects for English and French locales.
- Lines 21-23
  - Changes: Created new threads for English and French locales.
- Lines 25-27
  - Changes: Started threads for English and French locales.

File: 'WelcomeController.java'
- Lines 1-10
  - Changes: Package and import statements.
- Lines 12-14
  - Changes: Class declaration and annotation for CORS and REST controller.
- Lines 16-23
  - Changes: Defined getWelcomeMessage() to return a welcome message based on locale and added API endpoint /welcome.

File: 'app.component.ts'
- Lines 18-19
  - Changes: Initialized englishWelcomeMessage?! and frenchWelcomeMessage?! variables.
- Lines 36-37
  - Changes: Created HTTP GET requests to retrieve welcome messages from API endpoints.

File: 'app.component.html'
- Lines 26-29
    - Changes: Added HTML elements to display welcome messages.

### C2

**Prompt**: Modify the front end to display the price for a reservation in currency rates for USD, CAD, and EUR.

File: 'app.component.ts'
- Lines: 112-114
  - Change: Added priceCAD and priceEUR variables to the Room interface.
- Lines: 57-65
  - Change: Edited the onSumbit() function to calculate crude currency conversions for CAD and EUR and assign them
            to the priceCAD and priceEUR variables.

-File: 'app.component.html'
- Lines 81-83
  - Change: Added HTML elements to display priceCAD and priceEUR.

### C3

**Prompt**: Write a Java method to convert times between eastern time (ET), mountain time (MT), 
            and coordinated universal time (UTC) zones.

File: 'TimeConversion.java'
- Lines 1-7
  - Change: Package and import statements.
- Lines 9-10
  - Change: Class declaration and CORS annotation.
- Line 12
  - Change: Declared private static variable named formatter of type DateTimeFormatter that is initialized with HH:mm.
- Line 14
  - Change: Delcared convertTimeToAllZones() method.
- Line 15
  - Change: Declared the variable currentTime which is the time to be converted into ET, MT, and UTC.
- Line 16
  -  Change: Declared currentZonedDateTime of type ZonedDateTime which takes currentTime and parses as 
             a ZonedDateTime object with currentTime's time zone.
- Lines 18-20
  - Change: Declared ZoneId variables for ET, MT, and UTC named etZone, mtZone, and utcZone respectively.
- Lines 22-24
  - Change: Declared ZonedDateTime variables for ET, MT, and UTC that are initialized with currentZonedDateTime
            converted to the respective time zones using .withZoneSameInstant.
- Lines 26-28
  - Change: Used the previously defined formatter to convert the ZonedDateTime variables to strings.
- Lines 30-32
  - Change: Returned the converted times as a string.

File: 'TimeConversionController.java'
- Lines 1-3
    - Change: Package and import statements.
- Lines 5-6
  - Change: RestController and RequestMapping annotations to provide /api/time endpoint.
- Line 7-8
  - Change: CORS annotation and class declaration.
- Line 10
  - Change: GetMapping annotation added to provide /api/time/convert endpoint.
- Lines 11-14
  - Change: Defined convertTimeZones() method to return the converted times as a string.

### C3b

**Prompt**: Use the time zone conversion method from part C3a to display a message stating the time 
            in all three times zones in hours and minutes for an online, live presentation held at 
            the Landon Hotel. The times should be displayed as ET, MT, and UTC.

File: 'app.component.ts'
- Line 33
  - Change: Declared and initialized empty string named convertedTimes.
- Lines 59-63
  - Change: Declared fetchConvertedTimed() method and defined it to send GET request to /api/time/convert
            and assign the response to convertedTimes.
- Line 37
  - Change: Calls fetchConvertedTimes() method inside NgOnInit() method.
- Lines 64-68
  - Change: Logs any errors to the console and closes the method.

-File: 'app.component.html'
- Lines 66-69
  - Change: Created a div that adds a message about the live online presentation and displays the time for the
            presentation in ET, MT, and UTC by calling convertedTimes that was fetched in app.component.ts.

## Section D

### D1

**Prompt**: Build the Dockerfile to create a single image that includes all code, including modifications 
            made in parts C1 to C3. Commit and push the final Dockerfile to GitLab.

File: 'Dockerfile'
- Line 1
    -Change: Start with a base image containing Java runtime
- Line 5
    -Change: Copied the JAR file I packaged with maven to the Docker image.
- Line 8
  - Change: Set the working directory of the app inside the Docker image.
- Line 11
  - Change: Made app accessible to port 8080 to the host machine.
- Line 14
  - Change: Runs the application.

### D2 

**Prompt**: Test the Dockerfile by doing the following:

•   Create a Docker image of the current multithreaded Spring application.

•   Run the Docker image in a container and give the container a name that includes D387_[student ID].

•   Submit a screenshot capture of the running application with evidence it is running in the container.

File: 'Dockerfile'
- Line 1
  - Change: Ran docker build --no-cache -t d387_010912370_pa . to build Docker image from Dockerfile.
- Line 2
  - Change: Ran docker run -p 8080:8080 -d --name D387_010912370_PA d387_010912370_pa to run Docker image in a container
            that I named D387_010912370_PA.

### D3

**Prompt**: Describe how you would deploy the current multithreaded Spring application to the cloud. 
            Include the name of the cloud service provider you would use.

   I would deploy the Landon Hotel application using Amazon Web Services. First, I would push the Docker image to
an Amazon Elastic Container Registry repository. I would then use AWS Fargate, a serverless solution, to run the Docker
image. I would use AWS Fargate because it allows me to run containers without having to provision/manage servers. I would
set up a load balancer on the AWS Fargate instance to distribute traffic evenly across the containers. After that, I 
would configure a Security Group, the built-in virtual firewall for AWS to customize the traffic limits and other network
security options. Finally, I would  monitor the application using Amazon CloudWatch for metrics and insights and Amazon
CloudTrail for logging.

## Post-Instructions Commit Note for Evaluator
Files: Something about index.html and main.8182ae3c29cf9ac6.js have changed and continuously show up in my commit panel.
Out of fear that leaving them out of the commit will prevent all the files from being in GitLab, I'm including them in
this final commit
