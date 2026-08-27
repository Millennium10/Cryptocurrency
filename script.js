/* =========================================
   CRYPTOVAULT DEMO
   Fictional frontend authentication
========================================= */


/* DEMO LOGIN DETAILS */

const DEMO_EMAIL = "crypto@milly.com";
const DEMO_PASSWORD = "milly123";


/* ELEMENTS */

const loginPage =
    document.getElementById("loginPage");

const dashboardPage =
    document.getElementById("dashboardPage");

const loginForm =
    document.getElementById("loginForm");

const loginError =
    document.getElementById("loginError");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const showPasswordButton =
    document.getElementById("showPassword");

const logoutButton =
    document.getElementById("logoutButton");

const demoModal =
    document.getElementById("demoModal");

const modalTitle =
    document.getElementById("modalTitle");


/* =========================================
   CHECK LOGIN STATUS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loggedIn =
        sessionStorage.getItem("cryptoDemoLoggedIn");

    if (loggedIn === "true") {

        showDashboard();

    } else {

        showLogin();

    }

});


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


    loginError.textContent = "";


    if (
        email === DEMO_EMAIL &&
        password === DEMO_PASSWORD
    ) {

        sessionStorage.setItem(
            "cryptoDemoLoggedIn",
            "true"
        );


        loginForm.reset();

        showDashboard();

    } else {

        loginError.textContent =
            "Incorrect email or password.";

        passwordInput.value = "";

    }

});


/* =========================================
   SHOW PASSWORD
========================================= */

showPasswordButton.addEventListener(
    "click",
    function () {

        if (
            passwordInput.type === "password"
        ) {

            passwordInput.type = "text";

            showPasswordButton.textContent =
                "Hide";

        } else {

            passwordInput.type = "password";

            showPasswordButton.textContent =
                "Show";

        }

    }
);


/* =========================================
   SHOW DASHBOARD
========================================= */

function showDashboard() {

    loginPage.classList.add("hidden");

    dashboardPage.classList.remove("hidden");

}


/* =========================================
   SHOW LOGIN
========================================= */

function showLogin() {

    dashboardPage.classList.add("hidden");

    loginPage.classList.remove("hidden");

}


/* =========================================
   LOGOUT
========================================= */

logoutButton.addEventListener(
    "click",
    function () {

        sessionStorage.removeItem(
            "cryptoDemoLoggedIn"
        );

        closeDemo();

        showLogin();

        emailInput.value = "";

        passwordInput.value = "";

        loginError.textContent = "";

    }
);


/* =========================================
   DEMO ACTION MODAL
========================================= */

function showDemo(action) {

    modalTitle.textContent =
        action + " Unavailable Now, Kindly activate your account";

    demoModal.classList.add("show");

}


function closeDemo() {

    demoModal.classList.remove("show");

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener(
    "click",
    function (event) {

        if (event.target === demoModal) {

            closeDemo();

        }

    }
);


/* =========================================
   ESCAPE KEY CLOSES MODAL
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeDemo();

        }

    }
);