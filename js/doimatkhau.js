
var mk_cu = document.getElementById('mk_cu')
var mk_moi = document.getElementById('mk_moi')
var xac_nhan_mk_moi = document.getElementById('xac_nhan_mk_moi')
var cap_nhat_mk_btn = document.getElementById('btn_cap_nhat_mk')

async function updateDataMk() {
    if (mk_cu.value == "" || mk_moi.value == "" || xac_nhan_mk_moi.value == "") {
        alert("Nhập đầy đủ thông tin trước khi cập nhật")
    }else {
        if(mk_moi.value != xac_nhan_mk_moi.value ) {
            alert("Xác nhận mật khẩu mới chưa trùng khớp")
        }else{
            data = {
                mat_khau_cu: mk_cu.value,
                mat_khau_moi: mk_moi.value,
                mat_khau_go_lai: xac_nhan_mk_moi.value
            }
            let response = await updateFetch('https://searchgpt247.info/api/changepass', JSON.stringify(data), getCookie("token")) 
            console.log(data)
            alert(response.message)
        }
    }
}

cap_nhat_mk_btn?.addEventListener('click', async (e) => {
    e.preventDefault()
    updateDataMk()
})
document?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        cap_nhat_mk_btn.click();
    }
  });