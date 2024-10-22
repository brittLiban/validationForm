console.log("Script is running");

document.getElementById("contact-form").onsubmit = function () {
    
    let isValid = true;

    console.log("Running");

    // Grabbing form element values inside the submission handler
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;
    let meeting = document.getElementById("meeting").value;
    let mailingList = document.getElementById('mailing-list').checked;

    // Clear previous error messages
    clearErrors();

    // First Name validation
    if (fname == "") {
        let errSpan = document.getElementById('err-fname');
        errSpan.style.display = "block";
        isValid = false;
    }

    // Last Name validation
    if (lname == "") {
        let errSpan = document.getElementById('err-lname');
        errSpan.style.display = "block";
        isValid = false;
    }

    // Email validation: if mailing list is checked, email is required
    if (mailingList && email == "") {
        let errSpan = document.getElementById('err-noEmail');
        errSpan.style.display = "block";
        isValid = false;

    }

  
    if (mailingList) { 
        let showEmailFormatBtn = document.getElementById("lastEl");
        showEmailFormatBtn.style.display = "block";  // Show email format buttons
    }

    // If email is provided, validate its format
    if (email.length > 1 && (!email.includes("@") || !email.includes("."))) {
        let errSpan = document.getElementById('err-email');
        errSpan.style.display = "block";
        isValid = false;
    }

    // LinkedIn URL validation
    if (linkedin !== "" && !linkedin.startsWith("https://linkedin.com/in/")) {
        let errSpan = document.getElementById('err-linkedin');
        errSpan.style.display = "block";
        isValid = false;
    }

    // Meeting method validation
    if (meeting == "none") {
        let errSpan = document.getElementById('err-meeting');
        errSpan.style.display = "block";
        isValid = false;
    }

    else if (meeting == "other"){
        let showOther = document.getElementById("other-input");
        showOther.style.display = "inline-block";
     
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
