const traCuuInput = document.getElementById('sdt_cccd')
const ketQuaTraCuu = document.getElementById('ket_qua_tra_cuu')
const canhBao = document.getElementById('canh_bao')
function inputStatus() {
  if (!checkLogin()) {
    traCuuInput.readOnly = true
    traCuuInput.style.outline = 'none'
    traCuuInput.style.border = '1px solid #FF4E88'
    canhBao.style.visibility = 'visible'
  }
}
function decodeHTMLEntities(str) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = str;
  return tempDiv.textContent || tempDiv.innerText;
}
async function loadData() {
  if (traCuuInput.value) {
    let request = {
      so_dien_thoai: traCuuInput.value
    }
    let data = await getReponse('https://searchgpt247.info/api/search', undefined, JSON.stringify(request), getCookie('token'))
    if(data.message === "Không tìm thấy thông tin") {
      ketQuaTraCuu.innerHTML = "Hiện tại chưa có thông tin, bạn vui lòng quay lại tra cứu sau 24 giờ nữa, chúng tôi đang tích cực cập nhật!"
      return
    }
    data.data ? ketQuaTraCuu.innerHTML = decodeHTMLEntities(data.data) :  data.message;
    return
  }
  ketQuaTraCuu.innerHTML = ""
}
traCuuInput?.addEventListener('keydown',  (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
     loadData();
  }
})
// traCuuInput?.addEventListener('input', () => {
//   clearTimeout(thoiGianChoNhap);
//   thoiGianChoNhap = setTimeout(() => {
//     loadData();
//   }, 1000);
// })
traCuuInput?.addEventListener('focus',  () => {
  inputStatus()
})
traCuuInput?.addEventListener('blur', function() {
  traCuuInput.style.border = 'none'
  canhBao.style.visibility = 'hidden'
});