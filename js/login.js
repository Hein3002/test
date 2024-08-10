const dang_nhap_btn = document.getElementById('dang_nhap')
const dang_xuat_btn = document.getElementById('dang_xuat')
const user_status = document.getElementById('user_status')
console.log(user_status)
const TIMEOUT_DURATION = 30 * 60 * 1000
const COOKIE_NAME = "token"
var baseURL = 'https://searchgpt247.info/template/'

function deleteCookie(name) {
    var expires =  "Thu, 01 Jan 1970 00:00:00 GMT"
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
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;

}

const isLogin = () => {
    if (window.location.href.includes(baseURL + 'index.html') || window.location.href.includes(baseURL + 'dangnhap.html')) {
        if (user_status) {
            user_status.textContent = getCookie(COOKIE_NAME) ? "Đăng xuất" : "Đăng nhập"
        }
        return getCookie(COOKIE_NAME) ? true : false
    }
    if (!getCookie(COOKIE_NAME)) {
        window.location.replace(baseURL + 'index.html')
        return false
    }
    return true
}


function login(url) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(content => {
            return content
        })
        .catch(error => {
            console.error('Error posting content:', error);
            throw error;
        });
}

dang_nhap_btn?.addEventListener("click", async function () {
    const email = document.getElementById('email').value
    const matKhau = document.getElementById('mat_khau').value
    try {
        let response = await login(`https://searchgpt247.info/api/auth?username=${encodeURIComponent(email)}&password=${encodeURIComponent(matKhau)}`);
        if (response.code == 200) {
            alert(response.message)
            setCookie(COOKIE_NAME, response.token, TIMEOUT_DURATION)
            window.location.replace(baseURL + 'thongtingiaodich.html')
        } else {
            throw (response.message)
        }
    } catch (error) {
        alert(error);
    }

})

dang_xuat_btn?.addEventListener("click", async function () {
    deleteCookie(COOKIE_NAME)
    window.location.replace(baseURL + 'index.html');
})

user_status?.addEventListener("click", async function () {
    if(getCookie(COOKIE_NAME)) {
        deleteCookie(COOKIE_NAME)
    }
    window.location.replace(baseURL + 'dangnhap.html')
})


//kiem tra 
function setUserActivityTime() {
    localStorage.setItem('lastActivity', new Date().toISOString());
    resetTimeout();
}

function resetTimeout() {
    setCookie(COOKIE_NAME, getCookie(COOKIE_NAME), TIMEOUT_DURATION)
}

function checkActivity() {    
        const lastActivity = localStorage.getItem('lastActivity');
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
    document.addEventListener('click', setUserActivityTime)
    document.addEventListener('keypress', setUserActivityTime)
    document.addEventListener('mousemove', setUserActivityTime)
    document.addEventListener('scroll', setUserActivityTime)
}

window.addEventListener('load', () => {
    if(isLogin()) {
        setupUserActivityListeners()
        checkActivity()
    }
});


