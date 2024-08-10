const traCuuInput = document.getElementById('sdt_cccd')
const ketUqaTraCuu = document.getElementById('ket_qua_tra_cuu')
let thoiGianChoNhap
function decodeHTMLEntities(str) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = str;
  return tempDiv.textContent || tempDiv.innerText;
}
async function loadData() {
  if(traCuuInput.value) {
    let request ={
      so_dien_thoai :  traCuuInput.value
    }
    let data = await getReponse('https://searchgpt247.info/api/search', undefined,JSON.stringify(request) , getCookie('token'))    
    data.data ? ketUqaTraCuu.innerHTML =decodeHTMLEntities(data.data)  :ketUqaTraCuu.innerHTML=data.message;
    return
  }
  ketUqaTraCuu.innerHTML = ""
}
traCuuInput?.addEventListener('keydown',async (event)=>{
  if (event.key === 'Enter' || event.keyCode === 13) {
    await loadData();
  }
})
traCuuInput?.addEventListener('input',async ()=>{
  clearTimeout(thoiGianChoNhap);
  thoiGianChoNhap = setTimeout(() => {
    loadData();
  }, 1000); 
})