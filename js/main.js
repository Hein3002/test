const dang_xuat_btn = document.getElementById("dang_xuat");
const TIMEOUT_DURATION = 30 * 60 * 1000;
const COOKIE_NAME = "token";
var baseURL = "https://searchgpt247.info/";
///Cookie
function deleteCookie(name) {
    var expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    var path = "; path=/";
    document.cookie = name + "=; expires=" + expires + path  ;
}
function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
//-----------
function checkLogin() {
    if (getCookie(COOKIE_NAME)) {
        return true;
    } else {
        return false;
    }
}
dang_xuat_btn?.addEventListener("click", async function () {
    deleteCookie(COOKIE_NAME);
    window.location.replace(baseURL);
});
//kiem tra
function setUserActivityTime() {
    localStorage.setItem("lastActivity", new Date().toISOString());
    resetTimeout();
}

function resetTimeout() {
    setCookie(COOKIE_NAME, getCookie(COOKIE_NAME), TIMEOUT_DURATION);
}

function checkActivity() {
    const lastActivity = localStorage.getItem("lastActivity");
    if (lastActivity) {
        const now = new Date();
        const lastActivityDate = new Date(lastActivity);
        const timeDiff = now - lastActivityDate;
        if (timeDiff < TIMEOUT_DURATION) {
            resetTimeout();
        }
    }
}

function setupUserActivityListeners() {
    document.addEventListener("click", setUserActivityTime);
    document.addEventListener("keypress", setUserActivityTime);
    document.addEventListener("mousemove", setUserActivityTime);
    document.addEventListener("scroll", setUserActivityTime);
}

window.addEventListener("load", () => {
    if (checkLogin()) {
        setupUserActivityListeners();
        checkActivity();
    }
});
