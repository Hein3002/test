const traCuuInput = document.getElementById('sdt_cccd')
const ghiChuInput = document.getElementById('ghi_chu')
const canhBao = document.getElementById('canh_bao')
const ketQuaTraCuu = document.getElementById('ket_qua_tra_cuu')
const traCuuInputElement = () => {
  traCuuInput.style.outline = 'none'
  traCuuInput.style.border = '1px solid #FF4E88',
  canhBao.style.visibility = 'visible'
}
function inputStatus() {
  if (!checkLogin()) {
    traCuuInput.readOnly = true
    traCuuInputElement()
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
      so_dien_thoai: traCuuInput.value,
      ghi_chu: ghiChuInput.value
    }
    let data = await getReponse('https://searchgpt247.info/api/search', undefined, JSON.stringify(request), getCookie('token'))
    if (data.message === "Không tìm thấy thông tin") {
      ketQuaTraCuu.innerHTML = "Hiện chưa có thông tin, chúng tôi đang tích cực tìm kiếm thông tin và trả kết quả về email của bạn. Trong vòng 24 giờ tới nếu bạn không nhận được thông tin, hệ thống sẽ hoàn trả phí"
      return
    }    
    data.data ? ketQuaTraCuu.innerHTML = decodeHTMLEntities(data.data) : ketQuaTraCuu.innerHTML = decodeHTMLEntities(data.message);
    return
  }
  ketQuaTraCuu.innerHTML = ""
}
traCuuInput.addEventListener("keydown", (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    ghiChuInput.focus()
  }
});
ghiChuInput.addEventListener("keydown", (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    if(!traCuuInput.value){
      traCuuInputElement()
      return
    }
    loadData();
  }
});
traCuuInput.addEventListener("focus", function () {
  inputStatus()
});
[traCuuInput, ghiChuInput].forEach(function (element) {
  element.addEventListener("blur", function () {
    traCuuInput.style.border = 'none'
    canhBao.style.visibility = 'hidden'
  });
});