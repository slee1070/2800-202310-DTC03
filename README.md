# Project Title
PantryMaster

## 1. Project Description
Our project is developing a recipe recommendation app, PantryMaster, to help busy home cooks by recommending delicious recipes based on the ingredients that they already have in their pantry and refrigerator.

## 2. Collaborator List
Dream Crafters
1. Alfrey Chan
2. Diane Choi
3. Sung Lee
4. Amy Sim

## 3. Technologies and Resources Used
1. Embedded Javascript (EJS), Cascading Style Sheets (CSS), JavaScript (JS)
2. Bootstrap 5.0 (Frontend library)
3. 
4. 

## 4. Complete setup/installion/usage

Setup and Installation
To start using our project, users should follow these steps: 
    1. Clone the project repository.
    2. Install necessary dependancies listed in source files. 
    3.

## 5. Known Bugs and Limitations

## 6. Features for Future

## 7. Contents of Folder
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
│   ├── images                              # Folder that contains all images 
│   │   ├── Chef Ramsay.png                     / Image file for AI persona
│   │   ├── Grandma.png                         / Image file for AI persona
│   │   ├── Whisker.png                         / Image file for AI persona
│   │   ├── Remy.png                            / Image file for AI persona
│   │   ├── icon_account.png                    / Icon image for user account on nav bar
│   │   ├── icon_add.png                        / Icon image for add in pantry page
│   │   ├── icon_chat.png                       / Icon image for chat on nav bar
│   │   ├── icon_favorite.png                   / Icon image for favorite on nav bar
│   │   ├── icon_fridge.png                     / Icon image for fridge on nav bar
│   │   ├── icon_home.png                       / Icon image for home on nav bar
│   │   ├── icon_info.png                       / Icon image for about us on nav bar
│   │   ├── icon_logout.png                     / Icon image for log out on nav bar
│   │   ├── icon_recipe.png                     / Icon image for recipe on nav bar
│   │   ├── icon_remove.png                     / Icon image for remove in pantry page
│   │   ├── logo.png                            / PantryMaster logo image
│   │   ├── logo_title.png                      / PantryMaster logo title
│   │   └── user_preference                 # Folder that contains user preference images
│   │       ├── brazilian.png                   / Image for Brazilian food 
│   │       ├── chinese.png                     / Image for Chinese food 
│   │       ├── european.png                    / Image for European food 
│   │       ├── greek.png                       / Image for Greek food 
│   │       ├── indian.png                      / Image for Indian food 
│   │       ├── japanese.png                    / Image for Japanese food 
│   │       ├── korean.png                      / Image for Korean food 
│   │       ├── thai.png                        / Image for Thai food 
│   │       ├── mexican.png                     / Image for Mexican food 
│   │       ├── lactofree.png                   / Image for lactofree dietary restriction
│   │       ├── nutfree.png                     / Image for nutfree dietary restriction
│   │       ├── vegan.png                       / Image for vegan dietary restriction
│   │       └── yeastfree.png                   / Image for yeastfree dietary restriction
│   ├── js                                  # Folder that contains .js files
│   │   ├── chatbot_script.js                   / Javascript file for chatbot
│   │   ├── fun.js                              / Javascript file for easter egg
│   │   └── recipe2.js                          / Javascript file for recipe sort
│   └── style                               # Style folder that contains .css files
│       ├── chatbot.css                         / Stylesheet for chatbot
│       ├── cuisine.css                         / Stylesheet for cuisine
│       ├── dietary_restriction.css             / Stylesheet for dietary restrictions 
│       ├── index.css                           / Stylesheet for index page
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
    ├── recipe_cuisine.ejs                      / ejs file for recipe_cuisine page
    ├── reset_password_error.ejs                / ejs file for reset_password_error page
    ├── reset_password_success.ejs              / ejs file for reset_password_success page
    ├── security_answer_submit.ejs              / ejs file for security_answer_submit page
    ├── security_question_error.ejs             / ejs file for security_question_error page
    ├── signup.ejs                              / ejs file for signup page    
    ├── signup_submit_error.ejs                 / ejs file for signup_submit_error page
    ├── username_retreival.ejs                  / ejs file for username_retreival page    
    ├── username_retreival_view.ejs             / ejs file for username_retreival_view page
    ├── user_account.ejs                        / ejs file for user_account page
    ├── user_not_found.ejs                       ejs file for user_not_found page
    └── templates                       # Template folder for header and footers 
        ├── footer.ejs                          / ejs file for footer for all pages
        ├── footer_home.ejs                     / ejs file for footer for home page    
        ├── header.ejs                          / ejs file for header for all pages
        └── svg.ejs                             / ejs file for svg 
