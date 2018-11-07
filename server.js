const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   res.render('maintenance', {
//     titlePage: 'Maintenance',
//     welcomeMessage: 'The site is under maintenance'
//   });
//   // next();
// });

app.get('/', (req, res) => {
  res.render('home', {
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to our new website',
    titlePage: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'About Page',
    titlePage: 'About'
  });
});


app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle the request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
