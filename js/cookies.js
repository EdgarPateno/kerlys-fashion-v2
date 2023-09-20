
// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to check if the user has accepted cookies
function hasAcceptedCookies() {
    return getCookie("cookiesAccepted") === "true";
}

// Function to accept cookies
function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365); // Store the acceptance for one year
    hideCookieConsent();
}

// Function to decline cookies
function declineCookies() {
    setCookie("cookiesAccepted", "false", 365); // Store the decline for one year
    hideCookieConsent();
}

// Function to hide the cookie consent banner
function hideCookieConsent() {
    var cookieConsent = document.getElementById("cookieConsent");
    if (cookieConsent) {
        cookieConsent.style.display = "none";
    }
}

// Delay the display of the cookie consent banner
setTimeout(function () {
    var cookieConsent = document.getElementById("cookieConsent");
    if (cookieConsent) {
        cookieConsent.style.display = "block";
    }
}, 2000); // Delay of 2 seconds
