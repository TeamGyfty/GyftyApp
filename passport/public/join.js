$(document).ready(function () {
    var signUpForm = $("form.signup");
    var usernameInput = $("#username");
    var emailInput = $("#email");
    var passwordInput = $("#password");
     

    signUpForm.on("submit", function (event) {
        event.preventDefault();
        console.log("clicked");
        var userData = {
            name: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData);

        if (!userData.name || !userData.email || !userData.password) {
            return;
        }
        signUpUser(userData.name, userData.email, userData.password);
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(name, email, password) {

        $.post("/api/join", {
            username: name,
            email: email,
            password: password
        })
        .then(function (data,err) {
            console.log('finished');
            // window.location.replace(data);
        })
        // }).catch(err);
        // console.log(err);


// function handleLoginErr(err) {
//     $("#alert.msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
// }
};
});