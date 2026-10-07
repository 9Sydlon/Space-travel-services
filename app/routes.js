//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'choose-search'
router.post('/choose-route', function (req, res) {

  // Make a variable and give it the value from 'chooseSearch'
  var whatRoute = req.session.data['chooseDestination']

  // Check whether the variable matches a condition
  if (whatRoute == "moon"){
    // Send user to next page
    res.redirect('/moon')
  } else {
    // Send user to search mars
    res.redirect('/mars')
  }
})
