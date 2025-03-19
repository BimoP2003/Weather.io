$(document).ready(function() {
    $("#submit-button").click(function(event) {
        event.preventDefault(); 
        
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
  
        $("#email-error, #password-error").text("").hide();
  
        let valid = true;
  
        if (email === "") {
            $("#email-error").text("Email is required.").show();
            valid = false;
        } else if (!email.includes("@gmail.com")) {
            $("#email-error").text("Please enter a valid email address.").show();
            valid = false;
        }
  
        if (password === "") {
            $("#password-error").text("Password is required.").show();
            valid = false;
        } else if (password.length < 8) {
            $("#password-error").text("Password must be at least 8 characters.").show();
            valid = false;
        }
  
        if (valid) {
            window.location.href = "index.html"; 
        }
    });
  
    $("#cancel-button").click(function() {
        $("#signin-form")[0].reset();
        $("#email-error, #password-error").text("").hide();
    });
});