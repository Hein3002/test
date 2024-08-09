const TIMEOUT_DURATION = 30 * 60 * 1000;
const COOKIE_NAME = "token";
var baseURL = "https://searchgpt247.info/";
function deleteCookie(name) {
    var expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    var path = "; path=/";
    document.cookie = name + "=; expires=" + expires + path;
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
