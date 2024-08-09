window.addEventListener('load', function() {
    if(!checkLogin()){
        window.location.href="./index.html"
    }
});
searchBtn=document.getElementById('lank-search');
searchBtn.addEventListener('click',async ()=>{
    // document.getElementById('date_prev').value
    // document.getElementById('date_next').value
    table=document.getElementById('lank-table')
    table.removeChild(table.lastChild); 
    let data=await getFetch(`https://searchgpt247.info/api/transaction?from_date=${document.getElementById('date_prev').value}&to_date=${document.getElementById('date_next').value}`,undefined,getCookie('token'));
    data=data.data;
    tong=0;
    table.innerHTML+=data.map(item=>`<tr idrow="${item.id}">
        <td>${item.ngay_gio}</td>
        <td class="text-left">${item.dien_giai}</td>
        <td class="text-right">${item.loai=="1"?'':parseInt(item.so_tien).toLocaleString('vi-VN')}</td>
        <td class="text-right">${item.loai=="1"?parseInt(item.so_tien).toLocaleString('vi-VN'):''}</td>
        <td class="text-right">${item.loai=="0"?(tong+=parseInt(item.so_tien)).toLocaleString('vi-VN'):(tong-=parseInt(item.so_tien)).toLocaleString('vi-VN')}</td>
    </tr>`).join('')
})
async function getData(){
    let data=await getFetch('https://searchgpt247.info/api/transaction?from_date=2023-01-01&to_date=2024-12-31',undefined,getCookie('token'));
    table=document.getElementById('lank-table')
    data=data.data
    tong=0;
    table.innerHTML+=data.map(item=>`<tr idrow="${item.id}">
                        <td>${item.ngay_gio}</td>
                        <td class="text-left">${item.dien_giai}</td>
                        <td class="text-right">${item.loai=="1"?'':parseInt(item.so_tien).toLocaleString('vi-VN')}</td>
                        <td class="text-right">${item.loai=="1"?parseInt(item.so_tien).toLocaleString('vi-VN'):''}</td>
                        <td class="text-right">${item.loai=="0"?(tong+=parseInt(item.so_tien)).toLocaleString('vi-VN'):(tong-=parseInt(item.so_tien)).toLocaleString('vi-VN')}</td>
                    </tr>`).join('')
    console.log(data)
}

getData()