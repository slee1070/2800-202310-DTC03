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
├── app.js                              # File that contaions javascript functions
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
│   ├── ingredientts                    # Folder that contains food ingredients images
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
│   │   └── icon_sugars.png                     / Icon image for sweetners in modal for pantry page
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
│   │   └── icon_signup.svg                     / Icon image for signup on nav bar
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
│   │   ├── nutfree.png                         / Image for lactofree dietary restriction
│   │   ├── thai.png                            / Image for nutfree dietary restriction
│   │   ├── vegan.png                           / Image for vegan dietary restriction
│   │   └── yeastfree.png                       / Image for yeastfree dietary restriction
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
│       ├── signup.css                          / Stylesheet for signup page
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
    ├── signup.ejs                              / ejs file for signup page    
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
1. Clone the project repository from our GitHub repository.
2. Install necessary dependancies listed in package.json file. 
3. Sign up for a Cyclic account.
4. Once you're signed in to your Cyclic account, click on the "Create a new project" button. You'll be prompted to enter a name for your project.
5. After creating your project, connect your Git repository with Cyclic. To do this, go to your project dashboard, click on the "Connect Git Repository" button, and follow the instructions to connect your repository.
6. Before deploying your app, make sure to install all necessary dependencies. Open a terminal in your local project directory and run the following command to install all the required dependencies: npm i
7. Cyclic allows you to add environment variables to your deployment to securely store and manage your app's configuration. To add environment variables locally, create a file called .env in your project directory and add your variables.
8. Deploy your app: To deploy your app, go to your project dashboard on Cyclic, click on the "Deployments" tab, and then click on the "New Deployment" button. Here, you can configure your deployment settings, such as the name of the deployment, the Docker image to use, and the environment variables to set.
9. In the "Environment Variables" section, you can add any environment variables that your app needs to run. To add a variable, click on the "Add Variable" button and enter the variable name and value.
10. Once you have configured your deployment settings, click on the "Deploy" button to start the deployment process. Cyclic will build and deploy your app in a container with your environment variables configured.
11. The web app should now be live and accessible via a URL provided by Cyclic. You can monitor the status of your deployment and view logs in the Cyclic dashboard.

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
Our app incorporates AI through the implementation of a chatbot powered by OpenAI and a dataset stored in MongoDB. We utilized Python with Flask and LamaIndex to enable the AI to access our MongoDB dataset. As a result, our AI chatbot offers users the ability to search for recipes and receive personalized suggestions based on their pantry items. By leveraging the capabilities of AI and utilizing a comprehensive recipe dataset, the chatbot can provide accurate recipe recommendations and address user inquiries effectively. To enhance the user experience, we have incorporated four distinct personas for the chatbot, allowing users to select the one that aligns with their preferences. Additionally, users can enjoy lighthearted humor as the chatbot entertains them with amusing jokes.

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