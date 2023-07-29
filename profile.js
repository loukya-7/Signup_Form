const profileDetails = document.getElementById('profileDetails');
const logoutButton = document.getElementById('logoutButton');

// Retrieve the user details from local storage
const user = JSON.parse(localStorage.getItem('user'));

// Check if the user is logged in
if (user) {
  // Display user details in the profile page
  const userDetailsHTML = `
    <p>Full Name : ${user.username}</p>
    <p>Email : ${user.email}</p>
    <p>Token : ${user.accessToken}</p>
    <p>Password : ${user.password}</p>
  `;
  profileDetails.innerHTML = userDetailsHTML;
} else {
  // If the user is not logged in, redirect to the signup page
  window.location.href = 'index.html';
}

// add event listener to logoutButton
logoutButton.addEventListener('click', function () {
  // Clear local storage before redirect to the signup page
  localStorage.clear();

  // Redirect to the signup page
  window.location.href = 'index.html';
});
