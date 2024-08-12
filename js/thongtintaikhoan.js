
var capNhatBtn = document.getElementById('cap_nhat')
async function loadData() {
    let data = await getFetch('https://searchgpt247.info/api/info', undefined, getCookie('token'))
    data = data.data
    document.getElementById('lank-name').value = data.name
    document.getElementById('lank-sdt').value = data['dien_thoai']
    document.getElementById('lank-email').value = data.email
}
loadData();
async function updateData() {
    const ten = document.getElementById('lank-name').value
    const sdt = document.getElementById('lank-sdt').value
    const email = document.getElementById('lank-email').value
    if (ten == "" || sdt == "" || email == "") {
        alert("Nhập đầy đủ thông tin trước khi cập nhật")
    }else {
        data = {
            ho_ten: ten,
            so_dien_thoai: sdt,
            email: email
        }
        let response = await updateFetch('https://searchgpt247.info/api/info/update', JSON.stringify(data), getCookie("token"))
        alert(response.message)
    }
}

capNhatBtn?.addEventListener('click', async (e) => {
    e.preventDefault()
    updateData()
})
