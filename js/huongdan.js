
const huong_dan = document.getElementById('huong_dan')
const action_huong_dan = document.getElementById('action_huong_dan')
async function getHelp() {
        const data = await getFetch('https://searchgpt247.info/api/guide', undefined, undefined)
        huong_dan.innerHTML = data.data.content
}

getHelp()
function backHome() {
        console.log(action_huong_dan)
        if(checkLogin()){
                action_huong_dan.innerHTML += '<a href="/thongtintaikhoan.html">Tài khoản</a>'
        }
}
backHome()
