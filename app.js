const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
// Hide and unhide password
const show_password_btn = document.querySelector('#password-visibility');

const show_pw_icon = show_password_btn.querySelector('img');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
  } else {
    password.classList.remove('error');
  }
});
// PW visibility
show_password_btn.addEventListener('click', () => {
  // console.log('clicked')
 password.type = password.type === "password" ? "text" : "password"

 show_pw_icon.src = show_pw_btn.src.includes('off')
    ? 'visibility_off_24dp_FILL0_wght400_GRAD0_opsz24.png'
    : 'visibility_24dp_FILL0_wght400_GRAD0_opsz24.png';
})

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
