const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if(!username || !email || !password || !confirmPassword){
    signupMessage.innerText = 'Error: All fields are mandatory!'
    signupMessage.style.fontSize = '18px'
    signupMessage.style.color = '#625BF7'
    signupMessage.style.fontWeight = '700'
    return;
  }

  //chech password is matched or not
  if (password !== confirmPassword) {
    signupMessage.textContent = 'Passwords do not match. Please try again.';
    return;
  }

  //check password is strong or not
  if (!isPasswordStrong(password)) {
    signupMessage.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    signupMessage.style.fontSize = '12px';
    signupMessage.style.color = '#dc3545'
    return;
  }

  // Generate a random 16-byte access token
  const accessToken = generateRandomToken();

  // Store user details in local storage
  const user = {
    username: username,
    email: email,
    accessToken: accessToken,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));//we have to send any object in JSON format

  signupMessage.textContent = 'Signup successful! Redirecting to your profile...';
  signupMessage.style.color = '#198754'
  setTimeout(() => {
    //after 2 sec it will be redirected to profile.html file
    window.location.href = 'profile.html';
  }, 2000);
});

//strong password checker function
function isPasswordStrong(password) {
  // Strong password regex with minimum 8 characters, uppercase, lowercase, numbers, and special characters
  const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  return strongPasswordRegex.test(password);
}

//random token generator function
function generateRandomToken() {
  const tokenLength = 16;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomToken = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomToken += characters[randomIndex];
  }

  return randomToken;
}
