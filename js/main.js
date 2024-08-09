const dang_xuat_btn = document.getElementById("dang_xuat");
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
