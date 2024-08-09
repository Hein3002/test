async function loadData(){
    let data=await getFetch('https://searchgpt247.info/api/info',undefined,getCookie('token'))
    data=data.data
    document.getElementById('lank-name').value=data.name
    document.getElementById('lank-sdt').value=data['dien_thoai']
    document.getElementById('lank-email').value=data.email
}
loadData();