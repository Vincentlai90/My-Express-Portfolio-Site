/* Full name: Lai Minh Huy
   COMP 229 – Web Application Development
   Student ID: 301225382
   Date: 08/10/2023
   Created by Huy Lai. Copyright Fall 2023. All Rights reserved to Huy Lai
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "Welcome to my webpage" });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', paratxt: ''});
});


/* GET Project page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products', paratxt: ''});
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', paratxt: '' });
});


/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', paratxt: ''});
});

// Handle form submission
router.post('/submitForm', (req, res) => {
  // Process the form data here (e.g., save to a database)
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  // Now 'data' contains the information entered in the form
  console.log(data);

  // Redirect to the home page
  res.redirect('/');
});

module.exports = router;