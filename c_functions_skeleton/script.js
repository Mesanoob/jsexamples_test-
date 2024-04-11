/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation() {
  //  implement your statement(s) here
  return new Array('Mr.', 'Mrs.', 'Dr.')
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user, meal) => {
  //  implement your statement(s) here
  const msg = 'Hi ' + salutation + ' ' + user + '.' + meal
  return msg
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/
function validateInputs(choice, name = '') {
  if (choice && name !== '' && name !== undefined) {
    return true
  } else {
    return false
  }
}

function ftnRadioMeal(meal) {
  document.getElementById('displayPreference').textContent = meal
}

switch (meal) {
  case 'None':
    document.getElementById('displayPreference').textContent =
      'No preference selected'
    break
  case 'Beef':
    document.getElementById('displayPreference').textContent = 'Mcdonald'
    break
  case 'Chikin':
    document.getElementById('displayPreference').textContent = 'KFC'
    break
  default:
    document.getElementById('displayPreference').textContent =
      'We will contact you seperately'
    break
}
