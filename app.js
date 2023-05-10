const express = require('express');
const app = express();
const session = require('express-session');
const usersModel = require('./models/users');
const MongoDBStore = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt');
const Joi = require('joi')
const url = require('url');
// 1 - import
let ejs = require('ejs');
// 2 - set the view engine to ejs
app.set('view engine', 'ejs')

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sign Up', path: '/signup' },
  { label: 'Login', path: '/login' }
]

const dotenv = require('dotenv');
dotenv.config();

const dbStore = new MongoDBStore({
  uri: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
  collection: 'mySessions',
  expires: 1000 * 60 * 60 // 60 minutes
})

app.use(session({
  secret: `${process.env.NODE_SESSION_SECRET}`,
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", (req, res, next) => {
  app.locals.navLinks = navLinks;
  app.locals.currentURL = url.parse(req.url).pathname;
  next();
});

// public routes
app.get('/', (req, res) => {
  res.render('index', {
    session: req.session
  });
});

app.get('/signup', (req, res) => {
  res.render('signup', {
  });
});

app.post('/signupSubmit', async (req, res) => {
  let errorMessage = [];

  if (!req.body.username) {
    errorMessage.push('Username is required.');
  }

  if (!req.body.name) {
    errorMessage.push('name is required.');
  }
  
  if (!req.body.email) {
    errorMessage.push('Email is required.');
  }
  
  if (!req.body.password) {
    errorMessage.push('Password is required.');
  }

  if (!req.body.confirmPassword) {
    errorMessage.push('Please confirm your password.');
  } else if (req.body.password !== req.body.confirmPassword) {
      errorMessage.push('Passwords do not match.');
  }
  
  if (errorMessage.length > 0) {
    res.render('signupSubmitError', {
      errorMessage: errorMessage,
    });
    return;
  } else {
    const schema = Joi.object({
      username: Joi.string().alphanum().max(30).required(),
      name: Joi.string().alphanum().max(30).required(),
      email: Joi.string().max(30).required(),
      password: Joi.string().max(30).required()
    });

    try {
      await schema.validateAsync({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
    } catch (err) {
      errorMessage.push('The fields must all be strings!');
      console.log(errorMessage);
      res.render('signupSubmitError', {
        errorMessage: errorMessage,
      });
      return;
    }

    await usersModel.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    }).catch((error) => {
      errorMessage.push('Failed to sign up.');
      res.render('signupSubmitError', {
        errorMessage: errorMessage,
      });
    });
    req.session.GLOBAL_AUTHENTICATED = true;
    req.session.loggedUsername = req.body.username;
    res.redirect('/')
  }
});

app.get('/login', (req, res) => {
  res.render('login', {
  });
});

app.post('/login', async (req, res) => {
  // sanitize the input using Joi
  const schema = Joi.object({
    password: Joi.string()
  });

  try {
    const value = await schema.validateAsync({password: req.body.password})
  } catch (err) {
    console.log(err);
    console.log("The password has to be a string");
  }

  try {
    const result = await usersModel.findOne({
        username: req.body.username
    });
        
    if(result && bcrypt.compareSync(req.body.password, result?.password)) {
      // set a global variable to true if the user is authenticated
      req.session.GLOBAL_AUTHENTICATED = true;
      req.session.loggedName = result.name;
      req.session.loggedUsername = req.body.username;
      req.session.loggedEmail = req.body.email;
      req.session.loggedPassword = req.body.password;
      res.redirect('/');
    } else {
      res.render('loginError', {
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get('/does_not_exist', (req, res) => {
  res.status(404).render('404', {
  });
});

app.use(express.static('public'))

  
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.use((req, res) => {
  res.redirect('/does_not_exist');
});

module.exports = app;
