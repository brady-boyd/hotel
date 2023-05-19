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

**Prompt**: Modify the front end to display the prise for a reservation in currency rates for USD, CAD, and EUR.

File: 'app.component.ts'
- Lines: 112-114
  - Change: Added priceCAD and priceEUR variables to the Room interface.
- Lines: 57-65
  - Change: Edited the onSumbit() function to calculate crude currency conversions for CAD and EUR and assign them
            to the priceCAD and priceEUR variables.

-File: 'app.component.html'
- Lines 81-83
  - Change: Added HTML elements to display priceCAD and priceEUR.
