const ho_ten = document.getElementById('dk_ho_ten')
const sdt = document.getElementById('dk_sdt')
const email = document.getElementById('dk_email')
const btn_dang_ky = document.getElementById('dang_ky')
btn_dang_ky.addEventListener('click', async function dangKy() {
  if(ho_ten.value == "" || sdt.value == "" || email.value == "" ){
    alert("Vui lòng nhập đầy đủ thông tin")
  }else {
    let data = {
      ho_ten : ho_ten.value,
      so_dien_thoai : sdt.value,
      email: email.value
    }
    let response = await addFetch('https://searchgpt247.info/api/signup',JSON.stringify(data),undefined)
    if(response.message === "Cảm ơn bạn đã đăng ký tài khoản tại searchgpt247, vui lòng kiểm tra email để xác thực tài khoản!") {
      response.message = "Cảm ơn bạn đã đăng ký tài khoản tại searchgpt247, vui lòng kiểm tra email để lấy thông tin đăng nhập"
      alert(tresponse.message)
      window.location = "https://searchgpt247.info/dangnhap.html"
    }else {
      alert(response.message)
    }
  }
})
document?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      btn_dang_ky.click();
  }
});