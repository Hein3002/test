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
async function getData(token){
    let data=await getFetch('https://searchgpt247.info/api/transaction?from_date=2023-01-01&to_date=2024-12-31',undefined,getCookie('token'));
    table=document.getElementById('lank-table')
    data=data.data
    tong=0;
    table.innerHTML+=data.map(item=>`<tr idrow="${item.id}">
                        <td>${item.ngay_gio}</td>
                        <td>${item.dien_giai}</td>
                        <td>${item.loai=="1"?'':parseInt(item.so_tien).toLocaleString('vi-VN')}</td>
                        <td>${item.loai=="1"?parseInt(item.so_tien).toLocaleString('vi-VN'):''}</td>
                        <td>${item.loai=="0"?(tong+=parseInt(item.so_tien)).toLocaleString('vi-VN'):(tong-=parseInt(item.so_tien)).toLocaleString('vi-VN')}</td>
                    </tr>`).join('')
    console.log(data)
}
getData()