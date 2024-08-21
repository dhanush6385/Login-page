let dh1 = document.getElementById("lo4");
let dh2 = document.getElementById("lo5");
let dh3 = document.getElementById("lo6");
let dh4 = document.getElementById("lo7");
let dh5 = document.getElementById("lo8");
let dh6 = document.getElementById("lo2");

function dhanush() {
    let named = dh1.value;

    if (named === "" && dh2.value === "" && dh3.value === "" && dh4.value === "" && dh5.value === "") {
        alert("Please fill the form");
        return false;
    }

    if (named === "") {
        alert("Please enter your name");
        return false;
    }

    if (named.length < 5) {
        alert("Name must be at least 5 characters");
        return false;
    }

    let aged = dh2.value;
    if (aged === "") {
        alert("Please enter your age");
        return false;
    } else if (aged < 18 || aged > 23) {
        alert("Age must be between 18 and 23");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (dh3.value === "") {
        alert("Please enter the email");
        return false;
    } else if (!emailPattern.test(dh3.value)) {
        alert("Email is not valid");
        return false;
    }

    if (dh4.value === "") {
        alert("Please enter the password");
        return false;
    }

    if (dh5.value === "") {
        alert("Please enter the confirm password");
        return false;
    }

    if (dh4.value !== dh5.value) {
        alert("Password and Confirm Password must be the same");
        return false;
    }

    // Assuming dh6 is a button to submit the form
    if (dh6) {
        window.open("./submited.html", "_blank");
    }
}
