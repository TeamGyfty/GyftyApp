$(document).ready(function () {
    var loginBtn = $("#loginBtn");
    var usernameInput = $("#username-input");
    var passwordInput = $("#password-input");
    var userData = {};
    loginBtn.on("click", function (event) {
      event.preventDefault();
  
      userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      // loginUser(userData.username, userData.password);
      // usernameInput.val("");
      // passwordInput.val("");
   
  
    // function loginUser(username, password) {
      $.post("/api/login", {
        username: userData.username,
        password: userData.password
      }).then(function (data) {
        window.location.replace(data);
        console.log("logging in");
        console.log("login data: " + data)
      });
    });
    
    usernameInput.val("");
    passwordInput.val("");
  });