# PantryMaster 
**Empowering Home Cooks for Flavorful and Convenient Meals**

## 1. Project Description
**Our team is developing a recipe recommendation app, PantryMaster, to help busy home cooks by recommending delicious recipes based on the ingredients that they already have in their pantry and refrigerator.**

Our project, PantryMaster, is a recipe recommendation app aimed at helping busy home cooks. Our team believes that everyone deserves convenient access to flavorful meals that can be prepared with ease. Our goal is to empower home cooks by leveraging advanced technology to recommend recipes tailored to their specific ingredients, preferences, and dietary needs. PantryMaster is designed to save time, reduce waste, and inspire culinary creativity, offering a personalized and engaging cooking journey. With a focus on quality, convenience, and sustainability, we strive to make meal planning and preparation an enjoyable and fulfilling experience for all.

## 2. Technologies and Resources Used
1. Embedded Javascript (EJS), Cascading Style Sheets (CSS), JavaScript (JS), Python (PY)
2. Bootstrap 5.0 (Frontend library)
3. MongoDB 6.0 (Database)
4. Google icons (Material design)
5. Google’s OAuth (2.0):  Gmail with nodemailer
6. Cyclic (Deploy and host the project)
7. LlamaIndex (0.6.11): Data framework specifically designed for building LLM (Language Model) applications
8. Langchain (0.0.154): Developing applications powered by language models
9. GPT (3.0 Ada): An advanced language model developed by OpenAI
10. Flask (2.0.1): A lightweight and versatile web framework for Python
11. PyMongo (4.3.3): 
12. Dependencies
    - axios (1.4.0)
    - bcrypt (5.1.0)
    - connect-mongodb-session (3.1.1)
    - cron (2.3.0)
    - dotenv (16.0.3)
    - ejs (3.1.9)
    - express (4.18.2)
    - express-session (1.17.3)
    - googleapis (118.0.0)
    - joi (17.9.2)
    - moment (2.29.4)
    - mongoose (7.1.1)
    - node-cron (3.0.2)
    - nodemailer (6.9.2)
    - nodemon (2.0.22)

## 3. List of File Contents of folder
```
2800-202310-DTC03
├── .gitignore                          # Git-ignore file 
├── app.js                              # File that contains javascript functions
├── controller                          # Folder that contains controlling js files 
│   ├── chatbot.js                              / Javascript file for chatbot
│   └── server.js                               / Javascript file for the server connection
├── models                              # Folder that contains javascript model files
│   ├── ingredients.js                          / Javascript file that handles ingredients in recipes
│   ├── recipe.js                               / Javascript file that handles recipes 
│   └── users.js                                / Javascript file that handles user information
├── package-lock.json                   # Json file used for package version locking
├── package.json                        # Json file used by npm to specify the metadata and dependencies 
├── public                              # Folder that contains images, javascript, and style folders
├── images                              # Folder that contains images 
│   ├── Chef Ramsay.png                         / Image file for AI persona
│   ├── Grandma.png                             / Image file for AI persona
│   ├── Remy.png                                / Image file for AI persona
│   ├── Whisker.png                             / Image file for AI persona
│   ├── icon_add.png                            / Icon image for add in pantry page
│   ├── icon_remove.png                         / Icon image for remove in pantry page
│   ├── ingredients                    # Folder that contains food ingredients images
│   │   ├── icon_beans.png                      / Icon image for beans in modal for pantry page
│   │   ├── icon_berries.png                    / Icon image for berries in modal for pantry page
│   │   ├── icon_canned.png                     / Icon image for canned food in modal for pantry page
│   │   ├── icon_chilli.png                     / Icon image for chilli food in modal for pantry page
│   │   ├── icon_condiments.png                 / Icon image for sauces and condiments in modal for pantry page
│   │   ├── icon_dairy.png                      / Icon image for dairy products in modal for pantry page
│   │   ├── icon_drinks.png                     / Icon image for drinks in modal for pantry page
│   │   ├── icon_fruitVege.png                  / Icon image for fruit and vegetables in modal for pantry page
│   │   ├── icon_grains.png                     / Icon image for grains and pasta in modal for pantry page
│   │   ├── icon_herbs.png                      / Icon image for herbs in modal for pantry page
│   │   ├── icon_misc.png                       / Icon image for miscellaneous in modal for pantry page
│   │   ├── icon_nuts.png                       / Icon image for nuts and seeds in modal for pantry page
│   │   ├── icon_oils.png                       / Icon image for oils in modal for pantry page
│   │   ├── icon_proteins.png                   / Icon image for proteins in modal for pantry page
│   │   └── icon_sugars.png                     / Icon image for sweeteners in modal for pantry page
│   ├── logo.png                                / PantryMaster logo image
│   ├── svg                             # Folder that contains svg icons
│   │   ├── icon_account.svg                    / Icon image for account on nav bar
│   │   ├── icon_chat.svg                       / Icon image for chat on nav bar
│   │   ├── icon_favorite.svg                   / Icon image for favorite on nav bar
│   │   ├── icon_fridge.svg                     / Icon image for fridge on nav bar
│   │   ├── icon_home.svg                       / Icon image for home on nav bar
│   │   ├── icon_info.svg                       / Icon image for info on nav bar
│   │   ├── icon_login.svg                      / Icon image for login on nav bar
│   │   ├── icon_logout.svg                     / Icon image for logout on nav bar
│   │   ├── icon_recipe.svg                     / Icon image for recipe on nav bar
│   │   └── icon_signup.svg                     / Icon image for sign up on nav bar
│   ├── user_preference                 # Folder that contains user preference images
│   │   ├── brazilian.png                       / Image for Brazilian food 
│   │   ├── chinese.png                         / Image for Chinese food 
│   │   ├── european.png                        / Image for European food 
│   │   ├── greek.png                           / Image for Greek food 
│   │   ├── indian.png                          / Image for Indian food 
│   │   ├── japanese.png                        / Image for Japanese food 
│   │   ├── korean.png                          / Image for Korean food 
│   │   ├── lactofree.png                       / Image for Thai food 
│   │   ├── mexican.png                         / Image for Mexican food 
│   │   ├── nutfree.png                         / Image for lactose free dietary restriction
│   │   ├── thai.png                            / Image for nut free dietary restriction
│   │   ├── vegan.png                           / Image for vegan dietary restriction
│   │   └── yeastfree.png                       / Image for yeast free dietary restriction
│   ├── js                              # Folder that contains .js files
│   │   ├── chatbot_script.js                   / Javascript file for chatbot
│   │   ├── fun.js                              / Javascript file for easter egg
│   │   └── pantry.js                           / Javascript file for pantry
│   └── style                           # Style folder that contains .css files
│       ├── chatbot.css                         / Stylesheet for chatbot
│       ├── cuisine.css                         / Stylesheet for cuisine
│       ├── dietary_restriction.css             / Stylesheet for dietary restrictions 
│       ├── index.css                           / Stylesheet for index page
│       ├── pantry.css                          / Stylesheet for pantry page
│       ├── recipe.css                          / Stylesheet for recipe page
│       ├── signup.css                          / Stylesheet for sign up page
│       └── navbar.css                          / Stylesheet for nav bar
├── python_chatbot                      # Folder for Python chatbot
│   ├── app.py                                  / Python file that contains app functions
│   ├── chatbot.py                              / Python file that contains chatbot functions
│   └── requirements.txt                        / Text file that contains requirement description
├── README.md                           # Readme file        
└── views                               # Views folder that contains .ejs files
    ├── 404.ejs                                 / ejs file for 404 page
    ├── about_us.ejs                            / ejs file for about_us page
    ├── chat.ejs                                / ejs file for chat page
    ├── choose_persona.ejs                      / ejs file for choose_persona page
    ├── index.ejs                               / ejs file for index page
    ├── login.ejs                               / ejs file for login page
    ├── login_error.ejs                         / ejs file for login_error page    
    ├── pantry.ejs                              / ejs file for pantry page   
    ├── password_change.ejs                     / ejs file for password_change page
    ├── password_change_error.ejs               / ejs file for password_change_error page
    ├── password_recovery.ejs                   / ejs file for password_recovery page
    ├── preference.ejs                          / ejs file for preference page
    ├── preference_cuisine.ejs                  / ejs file for preference_cuisine page
    ├── preference_dietary_restriction.ejs      / ejs file for preference_dietary_restriction page
    ├── profile.ejs                             / ejs file for profile page
    ├── profile_change_password.ejs             / ejs file for profile_change_password page
    ├── recipe.ejs                              / ejs file for recipe page
    ├── reset_password_error.ejs                / ejs file for reset_password_error page
    ├── reset_password_success.ejs              / ejs file for reset_password_success page
    ├── security_answer_submit.ejs              / ejs file for security_answer_submit page
    ├── security_question_error.ejs             / ejs file for security_question_error page
    ├── signup.ejs                              / ejs file for sign up page    
    ├── signup_submit_error.ejs                 / ejs file for signup_submit_error page
    ├── username_retreival.ejs                  / ejs file for username_retreival page    
    ├── username_retreival_view.ejs             / ejs file for username_retreival_view page
    ├── user_not_found.ejs                       ejs file for user_not_found page
    └── templates                           # Template folder for header and footers 
        ├── footer.ejs                          / ejs file for footer for all pages
        ├── footer_home.ejs                     / ejs file for footer for home page    
        ├── header.ejs                          / ejs file for header for all pages
        └── svg.ejs                             / ejs file for svg 
```

## 4. How to install or run the project
1. Materials that need to be installed:
    - Embedded Javascript (EJS), Cascading Style Sheets (CSS), JavaScript (JS), Python (PY)
    - Bootstrap 5.0 - Frontend library used for responsive design and UI components.
    - MongoDB 6.0 - Database used for storing application data.
    - Google icons - Material design icons used for visual elements.
    - Google's OAuth (2.0) with Gmail and nodemailer - Used for authentication and sending emails.
    - Cyclic - Deployment and hosting platform used for hosting the project.
    - LlamaIndex (0.6.11) - Data framework specifically designed for building Language Model applications.
    - Langchain (0.0.154) - Framework for developing applications powered by language models.
    - GPT (3.0 Ada) - An advanced language model developed by OpenAI.
    - Flask (2.0.1) - Lightweight and versatile web framework for Python.
    - PyMongo (4.3.3) - Python driver for MongoDB.

2. 3rd party APIs and frameworks 
    OpenAI API key

3. Required API key
    Your OpenAI API key should be stored in your .env file.

4. Installation process for the dependencies
    1. Open Visual Studio Code: Launch the Visual Studio Code application on your Windows computer.
    2. Open your project folder: Use the File menu or the Open Folder button in Visual Studio Code to navigate and open the folder where your project is located.
    3. Open the integrated terminal: In Visual Studio Code, go to the View menu and select "Terminal" or use the shortcut Ctrl+ backtick (`) to open the integrated terminal at the bottom of the window.
    4. Check if Node.js and npm are installed: In the terminal, type the following commands and press Enter after each one: node --version and npm --version
    5. Install dependencies using npm: In the terminal, navigate to your project folder using the cd command.
    6. Install each dependency: Once you are in the project folder, use the following command to install each dependency listed in number 12 of Section #2 one by one. Replace <dependency> with the actual name of the dependency you want to install (i.e. npm install <dependency>)
    7. Repeat step 6 for all dependencies: Run the npm install command for each dependency you listed in your project.
    8. Verify the installation: After the installation of each dependency is complete, you can check the package.json file in your project folder to ensure that the dependencies are listed there.  
 
5. Configuration instruction
    - For running our PantryMaster Node.js application, the developer needs to install the following:
        1. Node.js: Install the latest version of Node.js from the official Node.js website (https://nodejs.org/). Choose the appropriate version for your operating system and follow the installation instructions. 
        2. Integrated Development Environment (IDE): You can choose any IDE. Some popular options include Visual Studio Code.
        3. Database: Make sure to have MongoDB installed and running. You can visit the official MongoDB website (https://www.mongodb.com/) and follow the installation instructions specific to your operating system.
        4. Add an.env file: In your project directory, create an .env file. This file will contain environment variables used by our Node.js application. This file contains necessary configuration variables, such as database connection strings, API keys, or any other sensitive information required by our application.
        5. To set up and install the project dependencies listed in the package.json file, follow these steps:
            - Navigate to your project directory using the command line or terminal.
            - Install project dependencies using npm by typing: npm install
            - This command will read the package.json file and install all the listed dependencies.
        6. Once the dependencies are installed and the .env file is added, you can proceed with developing and running our Node.js application. You can use the scripts defined in the package.json file, such as "start" for starting the server using node ./controller/server.js
        7. Once the Node server is running, open your browser and navigate to localhost:3000. This will allow you to access and interact with our application through the local development server.
    
    - Our Node.js application includes a chatbot implemented in Flask, which needs to be running on a separate server. To run the application with the chatbot server hosted remotely, you can simply access "localhost:3000" after you run the Node server. However, if you prefer to run the chatbot server locally, please follow these steps. To run our PantryMaster Flask chatbot application server, the developer needs to install the following:
        1. Language: Python - Install the latest version of Python programming language from the official Python website (https://www.python.org/). Make sure to choose the appropriate version for your operating system.
        2. Integrated Development Environment (IDE): You can choose an IDE based on your preference. Some popular options for Python development include PyCharm and Visual Studio Code.
        3. Python Libraries: To install the Python dependencies, you need to navigate to the /python_chatbot directory where the requirements.txt file is located. Open your command line and change the current working directory to /python_chatbot before running the 'pip install -r requirements.txt'
        4. Run the flask server: py .\python_chatbot\app.py (Windows) or python python_chatbot/app.py (Mac)
        5. Now you can go back to localhost:3000 in your web browser to access the PantryMaster Node.js application with the chatbot server running locally.

    - Setting up Google OAuth
        1. Visit console.cloud.google.com and log in with you Gmail account
        2. Click on “Select a project” on the top left corner
        3. Select “NEW PROJECT”
        4. Enter your project name, and click “CREATE”
        5. On the left, select “OAuth content screen” in the drop-down menu under “APIs and services”
        6. Select your project, check “External”, and click “CREATE”
        7. Enter your App name, email for the app, developer contact information, and then “SAVE AND CONTINUE”
        8. Select “Credentials” on the left-hand side, then “CREATE CREDENTIALS”, and “OAuth client ID”
        9. Select “Web application” for Application type, and add https://developers.google.com/oauthplayground under “Authorised redirect URIs”
        10. Click “CREATE”
        11.	Copy down the Client ID and Client secret
        12.	Visit https://developers.google.com/oauthplayground
        13.	On the top right corner, click the gear icon and enter your Client ID and Client secret
        14.	For Step 1, type in https://mail.google.com and click “Authorize APIs”
        15.	For Step 2, select “Exchange authorization code for tokens” and copy down the Refresh token
        16.	Check “Auto-refresh the token before it expires” 
        17.	If you haven’t yet, create a file named “.env”, and copy and paste the four lines below
            1.	CLIENT_ID=
            2.	CLIENT_SECRET=
            3.	REFRESH_TOKEN=
            4.	REDIRECT_URI=
        18.	For the four variables above, paste the Client ID, Client secret, Refresh token, and redirect URI from the earlier steps (DO NOT INCLUDE SPACES BETWEEN “=”)
        19.	Ensure you have installed the following dependencies: “nodemailer”, “moment”, “cron”.
        20.	Modify the email template in lines 78-110 in app.js
        21.	To select the times to automatically send out emails, change the cron schedule expression on line 38 accordingly
        22.	Modify lines between 38 to 113 according to your set up for proper functionality 
        23.	Finally, periodically revisit developers.google.com/oauthplayground to receive a new refresh token if expired (also update the new token in .env)

6. Testing checklist document: https://docs.google.com/spreadsheets/d/1khk0JnBLdOgkB3fuSdh7bAD50upJOmT9xDEvNVg_AK8/edit#gid=394496370 

## 5. How to use the product
1. Setting up user preferences and recommending recipes:
    - When the user signs up, they can specify their cuisine preferences and dietary restrictions.
    - Based on the user's pre-set preferences, our app suggests relevant recipes.
    - For example, if a user prefers Mexican food and follows a vegan diet, the app will recommend vegan Mexican recipes.
    - Users can also search for specific recipes using keywords.

2. Updating user's pantry list and sending notifications:
    - Users can easily update the items in their pantry.
    - By clicking the "+" button, users can search for and add items to their pantry.
    - Users can manually select each item or use the search bar to find specific items.
    - If a user wants to remove an item, they can simply click the "-" sign at the bottom of the list.
    - The app also offers an expiry date notification feature.
    - Users can add expiry dates to the items in their pantry.
    - When items are nearing their best before date, the app sends email notifications to the users.

3. AI chatbot for recipe search and suggestions:
    - Our AI chatbot allows users to search for recipes and provides personalized suggestions based on their pantry items.
    - The chatbot utilizes a comprehensive recipe dataset and AI capabilities.
    - Users can interact with the chatbot to receive recipe recommendations and ask any questions they may have.
    - The chatbot offers four distinct personas for users to choose from, catering to their preferences.
    - Users can also enjoy lighthearted humor as the chatbot entertains them with funny jokes.

## 6. Credits, References, and Licenses
| Credits                          | Refences                                                                           | License                                |
| :------------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------- |
| Flaticon                         | https://www.flaticon.com/                                                          | Free License                           |
| LlamaIndex 0.6.11                | https://gpt-index.readthedocs.io/                                                  | Open Source                            |
| MongoDB Reader from LlamaIndex   | https://gpt-index.readthedocs.io/en/latest/examples/data_connectors/MongoDemo.html | Open Source for research               |
| OpenAI                           | https://openai.com/                                                                | Pay per use                            |
| Adobe Fonts                      | https://fonts.adobe.com/                                                           | Student License                        |
| Adobe Stock                      | https://stock.adobe.com/                                                           | Student License                        |
| Freepik                          | https://www.freepik.com/                                                           | Free Licenes                           |
| Unsplash                         | https://unsplash.com/                                                              | Free Licenes                           |
| LangChain (0.0.154)              | https://python.langchain.com/                                                      | Open Source                            |
| Bootstrap 5.0 (Frontend library) | https://getbootstrap.com/                                                          | Open Source                            |
| MongoDB 6.0 (Database)           | https://www.mongodb.com/docs/manual/release-notes/6.0/                             | Server Side Public License (SSPL) v1.0 |
| Google icons (Material design)   | https://fonts.google.com/icons                                                     | Apache License 2.0 - Open Source       |
| Google's OAuth (2.0)             | https://developers.google.com/identity/protocols/oauth2                            | Free Licenes                           |
| Cyclic                           | https://docs.cyclic.sh/                                                            | Free Licenes                           |
| GPT (3.0 Ada)                    | https://platform.openai.com/docs/models                                            | Open Source                            |
| Flask (2.0.1)                    | https://flask.palletsprojects.com/en/2.3.x/changes/                                | BSD-3-Clause License                   |
| Bcrypt (5.1.0)                   | https://www.npmjs.com/package/bcrypt                                               | MIT License                            |

## 7. Use of AI 
1. Use AI to help create our app
    We leveraged AI specifically Chat GPT to generate ideas and suggestions during the brainstorming phase of app development. By inputting prompts and receiving generated text, we were able to explore various possibilities and gather inspiration for app features, user interactions, and content generation.
2. Use AI to create data sets and clean data sets
    While we didn't use AI to directly create or clean data sets, we utilized AI techniques and algorithms to process and analyze the existing recipe dataset. This helped us extract relevant information and optimize the data for efficient retrieval by the chatbot. By applying AI algorithms, we were able to enhance the quality and usefulness of the data set, ensuring that the chatbot can provide valuable insights and recommendations to the users.
3. Our app use AI
    Our app incorporates AI functionalities. The AI chatbot utilizes Python with Flask and LlamaIndex to interact with users and provide recipe recommendations based on their pantry items. The chatbot leverages AI algorithms to understand user queries, process the data, and generate appropriate responses. By utilizing AI, we aim to enhance the user experience and provide valuable assistance in finding recipes and addressing cooking-related inquiries. Additionally, the chatbot incorporates four distinct personas, which allows users to select the persona that aligns with their preferences. Each persona represents a unique character with specific traits, communication styles, and responses.
4. Limitations and further works
    To overcome the challenge of having four different personas and generating the right responses, we implemented an iterative approach. We repeatedly modified the prompts and tested them to ensure that the chatbot produced the appropriate answers. During the testing phase, we tested the chatbot's responses and compared them against the desired outcomes for each persona. If the generated responses deviated from the expected behavior, we made adjustments to the prompts and retested the chatbot.

## 8. Contact information
We are a team of developers - Dream Crafters. We are tech experts dedicated to revolutionizing the way busy home cooks plan and prepare meals. We understand the challenges faced by individuals striving to balance their busy lifestyles with the desire to enjoy delicious, home-cooked meals. Our mission for this project is to provide an innovative and user-friendly app that simplifies the recipe search process, reduces food waste, and enhances the overall cooking experience. 
### Collaborators
1. Alfrey Chan 
2. Diane Choi
3. Sung Lee 
4. Amy Sim

Contact: dream.crafters.dtc03@gmail.com

## 9. Features for Future
As part of our future plans for PantryMaster, we are considering exciting features to enhance the user experience.
1. Voice recognition technology 
    This would allow users to interact with the app using their voice, enabling a hands-free and intuitive cooking experience. Users can set their preferred voice persona, and our AI-powered assistant will provide cooking instructions and guidance using that voice, adding a personalized touch to the cooking process. This innovative feature aims to make cooking more convenient, engaging, and accessible for users, further elevating their culinary journey with PantryMaster.
2. Nutritional Information and Meal Planning 
    Integrate a comprehensive nutritional information database into PantryMaster, allowing users to track their daily intake of calories, macronutrients, and other dietary factors. Additionally, provide meal planning functionalities that help users create balanced meal plans based on their nutritional goals.
3. Smart Shopping List 
    Develop a smart shopping list feature that syncs with users' pantry inventory and recipe selections. The app can automatically generate a shopping list based on missing ingredients, quantities needed, and preferred stores. This would streamline the grocery shopping process and ensure users have everything they need for their chosen recipes.
4. Social Sharing and Community 
    Build a social sharing platform within PantryMaster, enabling users to share their favorite recipes, cooking tips, and food experiences with a community of like-minded home cooks. This feature would foster engagement, inspiration, and collaboration among users.