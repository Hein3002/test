
var email_quen_mk = document.getElementById('email_quen_mk')
var btn_lay_lai_mk = document.getElementById('lay_lai_mk')

async function searchPasswork() {
      data = {
        email: email_quen_mk.value,        
      }
      console.log(data)
//       let response = await updateFetch('https://searchgpt247.info/api/changepass', JSON.stringify(data), getCookie("token")) 
//       console.log(data)
//       alert(response.message)
}

btn_lay_lai_mk?.addEventListener('click', async (e) => {
    e.preventDefault()
    searchPasswork()
})
document?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      btn_lay_lai_mk.click();
    }
  });